import { PrismaClient } from "@prisma/client";
import { SystemEntity } from "../../../domains/system/entities/system.entity";
import { SystemGateway } from "../../../domains/system/gateways/system.gateway";

export class SystemRepository implements SystemGateway {

    private constructor(private prismaClient : PrismaClient){}

    public static build(prismaClient : PrismaClient) {
        return new SystemRepository(prismaClient)
    }

    async create(system: SystemEntity): Promise<void> {
        await this.prismaClient.system.create({
            data: {
                name: system.name
            }
        })
    }

    async findById(id: number): Promise<SystemEntity | null> {
        const system = await this.prismaClient.system.findFirst({
            where: {
                id
            }
        })

        return system ? SystemEntity.with({
            id : system!.id,
            name : system!.name
        }) : null
    }

    async find(): Promise<SystemEntity[]> {
        throw new Error("Method not implemented.");
    }

}