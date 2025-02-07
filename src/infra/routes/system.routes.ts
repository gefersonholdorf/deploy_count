import { Router } from "express";
import { SystemRepository } from "../repositories/system/system.repository";
import { prismaClient } from "../../prisma/prisma-client";
import { CreateSystemService } from "../../usecases/services/system/create-system.usecase";
import { CreateSystemController } from "../controllers/system/create-system.controller";

export const systemRoutes = Router()

const systemRepository = SystemRepository.build(prismaClient) 

const createSystemService = CreateSystemService.build(systemRepository)

const createSystemController = CreateSystemController.build(createSystemService)

systemRoutes.post('/create-system', (request, response, next) => createSystemController.handle(request, response, next))