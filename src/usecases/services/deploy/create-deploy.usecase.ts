import { date } from "zod"
import { DeployEntity, TypeDeploy } from "../../../domains/deploy/entities/deploy.entity"
import { DeployRepository } from "../../../infra/repositories/deploy/deploy.repository"
import { UseCase } from "../../usecase"
import { SystemRepository } from "../../../infra/repositories/system/system.repository"

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
        private systemRepository : SystemRepository
    ){}

    public static build(repository : DeployRepository, systemRepository : SystemRepository){
        return new CreateDeployService(repository,systemRepository)
    }

    async execute(input: CreateDeployInputDto): Promise<void> {
        const newDeploy : DeployEntity = DeployEntity.build(input.id!, input.personId, input.systemId, input.type, input.createdAt!)
        // Falta implementar validação de Person e SystemS

        const system = await this.systemRepository.findById(input.systemId)

        if(!system) {
            throw new Error('Sistema não encontrado!')
        }

        console.log('Passou')
        await this.repository.create(newDeploy)
    }

}