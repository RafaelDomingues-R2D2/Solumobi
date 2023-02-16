import { Router } from "express";
import { CreateClientController } from "../modules/clients/useCases/createClient/CreateClientController";

export const clientsRoutes = Router()

const createClientController = new CreateClientController()

clientsRoutes.post("/create", createClientController.handle)