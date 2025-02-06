import { SystemEntity } from "../../../domains/system/entities/system.entity"
import { SystemRepository } from "../../../infra/repositories/system/system.repository"
import { UseCase } from "../../usecase"

export interface CreateSystemInputDto {
    id ?: number
    name : string
}

export class CreateSystemService implements UseCase<CreateSystemInputDto, void> {

    private constructor(private repository : SystemRepository){}

    async execute(input: CreateSystemInputDto): Promise<void> {
        const newSystem = SystemEntity.build(input.id!, input.name)

        await this.execute(newSystem)
    }


    public static build(repository : SystemRepository) {
        return new CreateSystemService(repository)
    }
} 