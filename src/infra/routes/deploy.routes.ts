import { Router } from "express";
import { DeployRepository } from "../repositories/deploy/deploy.repository";
import { prismaClient } from "../../prisma/prisma-client";
import { CreateDeployService } from "../../usecases/services/deploy/create-deploy.usecase";
import { CreateDeployController } from "../controllers/deploy/create-deploy.controller";
import { SystemRepository } from "../repositories/system/system.repository";
import { FindDeployService } from "../../usecases/services/deploy/find-deploys.usecase";
import { FindDeployController } from "../controllers/deploy/find-deploy.controller";
import { PersonRepository } from "../repositories/person/person.repository";

export const deployRoutes = Router()

const deployRepository = DeployRepository.build(prismaClient)
const systemRepository = SystemRepository.build(prismaClient)
const personRepository = PersonRepository.build(prismaClient)

const createDeployService = CreateDeployService.build(deployRepository, systemRepository, personRepository)
const findDeployService = FindDeployService.build(deployRepository, systemRepository, personRepository)

const createDeployController = CreateDeployController.build(createDeployService)
const findDeployController = FindDeployController.build(findDeployService)

deployRoutes.post('/create-deploy', (request, response, next) => createDeployController.handle(request, response, next))
deployRoutes.get('/find-deploys', (request, response, next) => findDeployController.handle(request, response, next))