import { Router } from "express"
import { authenticateRoutes } from "./authenticate.routes"
import { clientsRoutes } from "./clients.routes"

import { usersRoutes } from "./users.routes"

export const router = Router()

router.use("/users", usersRoutes)
router.use(authenticateRoutes)
router.use("/clients", clientsRoutes)