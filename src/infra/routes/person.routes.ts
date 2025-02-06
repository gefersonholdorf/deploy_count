import { Router } from "express";
import { CreatePersonController } from "../controllers/person/create-person.controller";
import { CreatePersonService } from "../../usecases/services/person/create-person.usecase";
import { prismaClient } from "../../prisma/prisma-client";
import { PersonRepository } from "../repositories/person/person.repository";

export const personRoutes = Router()

const personRepository = PersonRepository.build(prismaClient)

const createPersonService = CreatePersonService.build(personRepository)

const createPersonController = CreatePersonController.build(createPersonService)

personRoutes.post('/create-person', (request, response) => createPersonController.handle(request, response))