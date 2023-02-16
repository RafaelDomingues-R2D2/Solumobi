import { Client } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IClientsRepository } from "../../repositories/IClientsRepository";

@injectable()
export class ListClientUseCase {
    constructor(
        @inject("ClientsRepository")
        private clientsRepository: IClientsRepository
    ){}

    async execute(): Promise<Client[]>{
        const clients = await this.clientsRepository.list()
        
        return clients
    }
}