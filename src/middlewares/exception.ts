import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export function errorHandler(err : Error, request : Request, response : Response, next : NextFunction) {

    if (err instanceof ZodError) {
        response.status(400).json({
            erro: err.name,
            messagem: err.issues[0].message
        })
    }

    response.status(500).json({
        erro: err.name,
        message: err.message
    })
}