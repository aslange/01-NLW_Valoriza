import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";


class ListComplimentsByUserService {
    async getComplimentsByUserReceiver(user_id: string) {
        const complimentsRepository = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepository.find({
            where: {
                user_receiver: user_id,
            }
        });

        return compliments;
    }

    async getComplimentsByUserSender(user_id: string) {
        const complimentsRepository = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepository.find({
            where: {
                user_sender: user_id,
            },
            relations: ["userSender", "userReceiver", "tag"],
        });

        return compliments;
    }
}

export { ListComplimentsByUserService }