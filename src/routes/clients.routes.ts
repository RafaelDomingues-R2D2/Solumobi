import { Router } from "express";
import { CreateClientController } from "../modules/clients/useCases/createClient/CreateClientController";
import { ListClientController } from "../modules/clients/useCases/listClient/ListClientController";

export const clientsRoutes = Router()

const createClientController = new CreateClientController()
const listClientController = new ListClientController()

clientsRoutes.post("/create", createClientController.handle)
clientsRoutes.get("/", listClientController.handle)
