import { PersonEntity } from "../entities/person.entity"

export interface PersonGateway {
    create(system : PersonEntity) : Promise<void>
    findById(id : number) : Promise<PersonEntity>
    find() : Promise<PersonEntity[]>
}