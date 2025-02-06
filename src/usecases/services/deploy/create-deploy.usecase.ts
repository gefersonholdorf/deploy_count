import { date } from "zod"
import { DeployEntity, TypeDeploy } from "../../../domains/deploy/entities/deploy.entity"
import { DeployRepository } from "../../../infra/repositories/deploy/deploy.repository"
import { UseCase } from "../../usecase"

export interface CreateDeployInputDto {
    id ?: number
    systemId : number
    personId : number
    type : TypeDeploy
    createdAt ?: Date
}

export class CreateDeployService implements UseCase<CreateDeployInputDto, void> {

    private constructor(private repository : DeployRepository){}

    public static build(repository : DeployRepository){
        return new CreateDeployService(repository)
    }

    async execute(input: CreateDeployInputDto): Promise<void> {
        const newDeploy : DeployEntity = DeployEntity.build(input.id!, input.personId, input.systemId, input.type, input.createdAt!)
        // Falta implementar validação de Person e System
        await this.repository.create(newDeploy)
    }

}