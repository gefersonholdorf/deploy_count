import { Router } from "express";
import { CreatePersonController } from "../controllers/person/create-person.controller";

export const personRoutes = Router()

const createPersonController = new CreatePersonController()

personRoutes.get('/persons', (request, response) => createPersonController.handle(request, response))