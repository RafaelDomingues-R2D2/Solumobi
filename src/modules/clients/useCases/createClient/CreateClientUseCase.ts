import { inject, injectable } from "tsyringe";
import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";
import { IClientsRepository } from "../../repositories/IClientsRepository";

@injectable()
export class CreateClientUseCase {
    constructor(
        @inject("ClientsRepository")
        private clientsRepository: IClientsRepository
    ){}

    async execute({name}: ICreateClientDTO): Promise<void>{
        await this.clientsRepository.create({
            name
        })
    }
}