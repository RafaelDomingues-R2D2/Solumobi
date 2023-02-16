import { ICreateClientDTO } from "../dtos/ICreateClientDTO";

export interface IClientsRepository {
    create(data: ICreateClientDTO): Promise<void>
}