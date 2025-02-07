import { Request, Response } from "express";
import { Controller } from "../controller";
import { CreateSystemInputDto, CreateSystemService } from "../../../usecases/services/system/create-system.usecase";
import { createSystemSchema } from "../../../validations/system/create-system.schema";
import { NextFunction } from "express-serve-static-core";

export class CreateSystemController implements Controller{

    private constructor(private createSystemService : CreateSystemService) {}

    public static build(createSystemService : CreateSystemService) {
        return new CreateSystemController(createSystemService)
    }

    async handle(request: Request, response: Response, next : NextFunction): Promise<any> {
        const requestBody = request.body

        try {
            createSystemSchema.parse(requestBody)
        } catch (error) {
            console.log(error)
            next(error)
        }

        const newSystem : CreateSystemInputDto = {
            name : requestBody.name
        }

        try {
            await this.createSystemService.execute(newSystem)

            response.status(201).json('Sistema cadastrado com sucesso!')
        } catch (error) {
            next(error)
        }
    }

}