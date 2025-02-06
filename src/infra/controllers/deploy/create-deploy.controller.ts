import { Request, Response } from "express";
import { Controller } from "../controller";
import { CreateDeployInputDto, CreateDeployService } from "../../../usecases/services/deploy/create-deploy.usecase";
import { createDeploySchema } from "../../../validations/deploy/create-deploy.schema";

export class CreateDeployController implements Controller {

    private constructor(private createDeployService : CreateDeployService) {}

    public static build(createDeployService : CreateDeployService) {
        return new CreateDeployController(createDeployService)
    }

    async handle(request: Request, response: Response): Promise<any> {
        const requestBody = request.body

        try {
            createDeploySchema.parse(requestBody)
        } catch (error) {
            console.log(error)
            return response.status(400).json({
                error: 'Dados inválidos!',
                details: error
            })
        }

        const newDeploy : CreateDeployInputDto = {
            personId: requestBody.personId,
            systemId: requestBody.systemId,
            type: requestBody.type
        }

        try {
            await this.createDeployService.execute(newDeploy)

            response.status(201).json('Deploy inserido com sucesso!')
        } catch (error) {
            console.log(error)
            response.status(500).json('Erro ao inserir Deploy!')
        }
    }

}