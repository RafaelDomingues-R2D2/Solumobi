import { Client } from "@prisma/client";
import { ICreateClientDTO } from "../dtos/ICreateClientDTO";

export interface IClientsRepository {
    create(data: ICreateClientDTO): Promise<void>
    list(): Promise<Client[]>
}