import { Router } from "express";
import { DeployRepository } from "../repositories/deploy/deploy.repository";
import { prismaClient } from "../../prisma/prisma-client";
import { CreateDeployService } from "../../usecases/services/deploy/create-deploy.usecase";
import { CreateDeployController } from "../controllers/deploy/create-deploy.controller";
import { SystemRepository } from "../repositories/system/system.repository";

export const deployRoutes = Router()

const deployRepository = DeployRepository.build(prismaClient)
const systemRepository = SystemRepository.build(prismaClient)

const createDeployService = CreateDeployService.build(deployRepository, systemRepository)

const createDeployController = CreateDeployController.build(createDeployService)

deployRoutes.post('/create-deploy', (request, response, next) => createDeployController.handle(request, response, next))