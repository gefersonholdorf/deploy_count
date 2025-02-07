import { Request, Response, NextFunction } from "express";
import { FindDeployService } from "../../../usecases/services/deploy/find-deploys.usecase";
import { Controller } from "../controller";

export class FindDeployController implements Controller {

    private constructor(private findDeployService : FindDeployService) {}

    async handle(request: Request, response: Response, next: NextFunction): Promise<any> {
        try {
            const deploys = await this.findDeployService.execute()

            if (deploys.deploys.length <= 0) {
                throw new Error('Nenhum resultado encontrado')
            }

            response.status(200).json(deploys)
        } catch (error) {
            next(error)
        }
    }

    public static build(findDeployService : FindDeployService) {
        return new FindDeployController(findDeployService)
    }
}