import { date } from "zod"
import { DeployEntity, TypeDeploy } from "../../../domains/deploy/entities/deploy.entity"
import { DeployRepository } from "../../../infra/repositories/deploy/deploy.repository"
import { UseCase } from "../../usecase"
import { SystemRepository } from "../../../infra/repositories/system/system.repository"
import { PersonRepository } from "../../../infra/repositories/person/person.repository"

export interface CreateDeployInputDto {
    id ?: number
    systemId : number
    personId : number
    type : TypeDeploy
    createdAt ?: Date
}

export class CreateDeployService implements UseCase<CreateDeployInputDto, void> {

    private constructor(
        private repository : DeployRepository,
        private systemRepository : SystemRepository,
        private personRepository : PersonRepository
    ){}

    public static build(repository : DeployRepository, systemRepository : SystemRepository, personRepository : PersonRepository){
        return new CreateDeployService(repository,systemRepository, personRepository)
    }

    async execute(input: CreateDeployInputDto): Promise<void> {
        const newDeploy : DeployEntity = DeployEntity.build(input.id!, input.systemId, input.personId, input.type, input.createdAt!)
        
        const person = await this.personRepository.findById(input.personId)

        if(!person) {
            throw new Error('Pessoa não encontrada!')
        }

        const system = await this.systemRepository.findById(input.systemId)

        if(!system) {
            throw new Error('Sistema não encontrado!')
        }

        console.log('Passou')
        await this.repository.create(newDeploy)
    }

}