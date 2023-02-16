import { container } from "tsyringe"

import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository"
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository"

import { IClientsRepository } from "../../modules/clients/repositories/IClientsRepository"
import { ClientsRepository } from "../../modules/clients/repositories/implementations/ClientsRepository"

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)

container.registerSingleton<IClientsRepository>(
    "ClientsRepository",
    ClientsRepository
)