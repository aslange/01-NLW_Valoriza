import { Request, Response, NextFunction } from "express";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    // Verificar se usuário admin
    const { user_id } = request;

    const usersRepositories = getCustomRepository(UsersRepositories);

    const { admin } = await usersRepositories.findOne(user_id);

    if (admin) {
        return next();
    }

    return response.status(401).json({
        status: "error",
        error: "Unauthorized",
    });
}