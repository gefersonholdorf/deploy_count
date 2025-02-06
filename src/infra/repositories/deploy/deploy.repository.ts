import { PrismaClient } from "@prisma/client";
import { DeployEntity } from "../../../domains/deploy/entities/deploy.entity";
import { DeployGateway } from "../../../domains/deploy/gateways/deploy.gatway";

export class DeployRepository implements DeployGateway {

    private constructor(private repository : PrismaClient){}

    public static build(repository : PrismaClient) {
        return new DeployRepository(repository)
    }

    async create(system: DeployEntity): Promise<void> {
        await this.repository.deploy.create({
            data: {
                systemId: system.personId,
                personId: system.personId,
                type: String(system.type)
            }
        })
    }

    find(): Promise<DeployEntity[]> {
        throw new Error("Method not implemented.");
    }
}