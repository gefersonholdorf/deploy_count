import { Request, response, Response } from "express";

export class CreatePersonController {

    constructor() {
    }

    public async handle(request : Request, response : Response) : Promise<any> {
        return await response.status(200).json({})
    }
}