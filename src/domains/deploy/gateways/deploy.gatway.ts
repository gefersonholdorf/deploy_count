import { DeployEntity } from "../entities/deploy.entity"

export interface DeployGateway {
    create(system : DeployEntity) : Promise<void>
    find() : Promise<DeployEntity[]>
}