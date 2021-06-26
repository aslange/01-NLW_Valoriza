import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    // Receber o token
    const authToken = request.headers.authorization;

    // Validar se token está preenchido

    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        // Validar se token é valido
        const { sub } = verify(token, "bc2ffbdc04f67e17a417da4f3a029db6") as IPayload;

        // Recuperar informações do usuário
        request.user_id = sub;

    } catch (err) {
        return response.status(401).end();
    }



    // return response.status(401).json({
    //     status: "error",
    //     error: "Unauthorized",
    // });





    return next();
}