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

    findById(id: number): Promise<SystemEntity> {
        throw new Error("Method not implemented.");
    }
    find(): Promise<SystemEntity[]> {
        throw new Error("Method not implemented.");
    }

}