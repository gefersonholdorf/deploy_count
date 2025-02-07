import { PrismaClient } from "@prisma/client";
import { PersonEntity } from "../../../domains/person/entities/person.entity";
import { PersonGateway } from "../../../domains/person/gateways/person.gateway";

export class PersonRepository implements PersonGateway {

    private constructor(private prismaClient : PrismaClient){}

    public static build(prismaClient : PrismaClient) {
        return new PersonRepository(prismaClient)
    }

    async create(person: PersonEntity): Promise<void> {
        await this.prismaClient.person.create({
            data: {
                name: person.name
            }
        })
    }

    async findById(id: number): Promise<PersonEntity | null> {
        const person = await this.prismaClient.person.findFirst({
            where: {
                id
            }
        })

        return person ? PersonEntity.with({
            id: person!.id,
            name: person!.name
        }) : null
    }

    find(): Promise<PersonEntity[]> {
        throw new Error("Method not implemented.");
    }

}