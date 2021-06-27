import { Request, Response } from "express";
import { ListComplimentsByUserService } from "../services/ListComplimentsByUserService";

class ListComplimentsByUserController {
    async handleUserReceiver(request: Request, response: Response) {
        const { user_id } = request;

        const listComplimentsByUserReceiverService = new ListComplimentsByUserService();

        const compliments = await listComplimentsByUserReceiverService.getComplimentsByUserReceiver(user_id);

        return response.json(compliments);
    }

    async handleUserSender(request: Request, response: Response) {
        const { user_id } = request;

        const listComplimentsByUserSenderService = new ListComplimentsByUserService();

        const compliments = await listComplimentsByUserSenderService.getComplimentsByUserSender(user_id);

        return response.json(compliments);
    }
}

export { ListComplimentsByUserController }