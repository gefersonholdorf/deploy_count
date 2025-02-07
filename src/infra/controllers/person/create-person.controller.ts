import { NextFunction, Request, response, Response } from "express";
import { CreatePersonService, CreatePersonUseCaseInputDto } from "../../../usecases/services/person/create-person.usecase";
import { createPersonSchema } from "../../../validations/person/create-person.schema";
import { Controller } from "../controller";

export class CreatePersonController implements Controller{

    private constructor(private createPersonService : CreatePersonService) {
    }

    public static build(createPersonService : CreatePersonService) {
        return new CreatePersonController(createPersonService)
    }

    public async handle(request : Request, response : Response, next : NextFunction) : Promise<any> {
        const requestBody = request.body

        try {
            createPersonSchema.parse(requestBody)
        } catch (error) {
            console.log(error)
            next(error)
        }

        const body : CreatePersonUseCaseInputDto = {
            name: requestBody.name
        }

        try {
            await this.createPersonService.execute(body)

            response.status(201).json("Pessoa cadastrada com sucesso")
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}