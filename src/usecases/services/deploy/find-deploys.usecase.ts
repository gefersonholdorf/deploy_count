import { DeployEntity, TypeDeploy } from "../../../domains/deploy/entities/deploy.entity"
import { DeployRepository } from "../../../infra/repositories/deploy/deploy.repository"
import { PersonRepository } from "../../../infra/repositories/person/person.repository"
import { SystemRepository } from "../../../infra/repositories/system/system.repository"
import { UseCase } from "../../usecase"

export interface FindDeployOutputDto {
    deploys: {
        id : number
        systemId : string
        personId : string
        type : TypeDeploy
        createdAt : Date
    }[]
}

export class FindDeployService implements UseCase<void, FindDeployOutputDto> {

    private constructor(
        private repository : DeployRepository,
        private systemRepository : SystemRepository,
        private personRepository : PersonRepository
    ) {}

    public static build(repository : DeployRepository, systemRepository : SystemRepository, personRepository : PersonRepository) {
        return new FindDeployService(repository, systemRepository, personRepository)
    }

    async execute(input: void): Promise<FindDeployOutputDto> {
        const deploys = await this.repository.find()

        return this.presentOutput(deploys)
    }

    private async presentOutput(input : DeployEntity[]) : Promise<FindDeployOutputDto> {
        const deploys = await Promise.all(
            input.map(async (deploy) => {
            const system = await this.systemRepository.findById(deploy.systemId)
            const person = await this.personRepository.findById(deploy.personId)
            return {
                id: deploy.id!,
                systemId: system!.name,
                personId: person!.name,
                type: deploy.type as TypeDeploy,
                createdAt: deploy.createdAt!
                }
            })
        )

        return {deploys}
    }

}