import { IError } from "error";
import { Request, Response } from "express";

const errorHanlderMiddleware = (err: IError, req: Request, res: Response) => {
    const customError = {
        statusCode: err.statusCode || 500,
        message: err.message || "Something went wrong, please try again!"
    }

    res.status(customError.statusCode).json({ success: false, message: customError.message })
}

export default errorHanlderMiddleware;