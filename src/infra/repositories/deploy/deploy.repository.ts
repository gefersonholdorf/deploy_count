import { PrismaClient } from "@prisma/client";
import { DeployEntity, TypeDeploy } from "../../../domains/deploy/entities/deploy.entity";
import { DeployGateway } from "../../../domains/deploy/gateways/deploy.gatway";

export class DeployRepository implements DeployGateway {

    private constructor(private prismaClient : PrismaClient){}

    public static build(repository : PrismaClient) {
        return new DeployRepository(repository)
    }

    async create(system: DeployEntity): Promise<void> {
        console.log(system.personId);
        await this.prismaClient.deploy.create({
            data: {
                personId: system.personId,
                systemId: system.systemId,
                type: String(system.type)
            }
        })
    }

    async find(): Promise<DeployEntity[]> {
        const deploys = await this.prismaClient.deploy.findMany()

        return deploys.map((deploy) => {
            return DeployEntity.with({
                id: deploy.id,
                personId: deploy.personId,
                systemId: deploy.systemId,
                type: deploy.type as TypeDeploy,
                createdAt: deploy.createdAt
            })
        })
    }
}