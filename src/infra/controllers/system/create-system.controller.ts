import { Request, Response } from "express";
import { Controller } from "../controller";
import { CreateSystemInputDto, CreateSystemService } from "../../../usecases/services/system/create-system.usecase";
import { createSystemSchema } from "../../../validations/system/create-system.schema";

export class CreateSystemController implements Controller{

    private constructor(private createSystemService : CreateSystemService) {}

    public static build(createSystemService : CreateSystemService) {
        return new CreateSystemController(createSystemService)
    }

    async handle(request: Request, response: Response): Promise<any> {
        const requestBody = request.body

        try {
            createSystemSchema.parse(requestBody)
        } catch (error) {
            console.log(error)
            return response.status(400).json({
                error: "Dados inválidos!",
                details: error
            })
        }

        const newSystem : CreateSystemInputDto = {
            name : requestBody.name
        }

        try {
            await this.createSystemService.execute(newSystem)

            response.status(201).json('Sistema cadastrado com sucesso!')
        } catch (error) {
            console.log(error)
            response.status(500).json('Erro ao criar Sistema!')
        }
    }

}