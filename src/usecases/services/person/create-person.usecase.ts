import { PersonEntity } from "../../../domains/person/entities/person.entity";
import { PersonRepository } from "../../../infra/repositories/person/person.repository";
import { UseCase } from "../../usecase";

export interface CreatePersonUseCaseInputDto {
    id ?: number
    name : string
}

export class CreatePersonService implements UseCase<CreatePersonUseCaseInputDto, void> {

    private constructor(private repository : PersonRepository) {}

    public static build(repository : PersonRepository) {
        return new CreatePersonService(repository)
    }

    async execute(input: CreatePersonUseCaseInputDto): Promise<void> {
        const newPerson  : PersonEntity = PersonEntity.build(input.id!, input.name)

        await this.repository.create(newPerson)
    }

}