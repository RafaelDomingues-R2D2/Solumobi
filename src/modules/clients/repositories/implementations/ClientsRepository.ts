import { prisma } from "../../../../shared/infra/database/prismaClient";
import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";
import { IClientsRepository } from "../IClientsRepository";

export class ClientsRepository implements IClientsRepository{
    async create({name}: ICreateClientDTO): Promise<void>{
        await prisma.client.create({
            data: {
                name
            }
        })
    }
}