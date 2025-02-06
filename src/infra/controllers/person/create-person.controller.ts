import { Request, response, Response } from "express";
import { CreatePersonService, CreatePersonUseCaseInputDto } from "../../../usecases/services/person/create-person.usecase";
import { CreatePersonSchema } from "../../../validations/person/createPerson.schema";
import { ZodError } from "zod";

export class CreatePersonController {

    private constructor(private createPersonService : CreatePersonService) {
    }

    public static build(createPersonService : CreatePersonService) {
        return new CreatePersonController(createPersonService)
    }

    public async handle(request : Request, response : Response) : Promise<any> {
        const requestBody = request.body

        try {
            CreatePersonSchema.parse(requestBody)
        } catch (error) {
            console.log(error)
            return response.status(400).json({
                error: 'Dados inválidos',
                details: error
            })
        }

        const body : CreatePersonUseCaseInputDto = {
            name: requestBody.name
        }

        try {
            await this.createPersonService.execute(body)

            response.status(200).json("Pessoa cadastrada com sucesso")
        } catch (error) {
            console.log(error)
            response.status(500).json('Erro ao criar Pessoa!')
        }
    }
}