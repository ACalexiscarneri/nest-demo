import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

/*@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const now = new Date();
        const date = now.toDateString();
        const time = now.toTimeString();
        console.log(` middleware ejecutandose en la ruta ${req.url} con el metodo: ${req.method} en la fecha: ${date} a la hora: ${time}`)
        next();
    }
}*/

const loggerGlobal = (req: Request, res: Response, next:NextFunction) => {
    const now = new Date();
    const date = now.toDateString();
    const time = now.toTimeString();
    console.log(` middleware ejecutandose en la ruta ${req.url} con el metodo: ${req.method} en la fecha: ${date} a la hora: ${time}`)
    next();
}
export default loggerGlobal;