import { SystemEntity } from "../entities/system.entity";

export interface SystemGateway {
    create(system : SystemEntity) : Promise<void>
    findById(id : number) : Promise<SystemEntity | null>
    find() : Promise<SystemEntity[]>
}