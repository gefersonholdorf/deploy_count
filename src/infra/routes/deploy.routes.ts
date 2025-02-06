import { Router } from "express";
import { DeployRepository } from "../repositories/deploy/deploy.repository";
import { prismaClient } from "../../prisma/prisma-client";
import { CreateDeployService } from "../../usecases/services/deploy/create-deploy.usecase";
import { CreateDeployController } from "../controllers/deploy/create-deploy.controller";

export const deployRoutes = Router()

const deployRepository = DeployRepository.build(prismaClient)

const createDeployService = CreateDeployService.build(deployRepository)

const createDeployController = CreateDeployController.build(createDeployService)

deployRoutes.post('/create-deploy', (request, response) => createDeployController.handle(request, response))