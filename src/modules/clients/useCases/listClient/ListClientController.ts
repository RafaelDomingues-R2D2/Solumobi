import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListClientUseCase } from "./ListClientUseCase";

export class ListClientController {
    async handle(request: Request, response: Response): Promise<Response>{
        const listClientUseCase = container.resolve(ListClientUseCase)

        const clients = await listClientUseCase.execute()

        return response.status(200).json({clients})
    }
}