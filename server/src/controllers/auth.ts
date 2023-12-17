import sendToken from "../utils/sendToken";
import User from "../models/User";
import { Request, Response } from "express";
import { IUser } from "user";
import { BadRequestError, UnauthenticatedError } from "../erros";

interface IReq extends Request {
	body: IUser;
}

// register user
export const registerUser = async (req: Request, res: Response) => {
	const {
		body: { name, email, password },
	} = req as IReq;

	if (!(name && email && password))
		throw new BadRequestError("Please provide all values!");

	const user = await User.create(req.body);
	sendToken(res, user, 201, "Successfully registred!");
};

// login user
export const loginUser = async (req: Request, res: Response) => {
	const {
		body: { email, password },
	} = req as IReq;

	if (!(email && password))
		throw new BadRequestError("Please Provide all values!");

	const user = await User.findOne({ email }).select("+password");

	if (!user) throw new UnauthenticatedError("Invalid credendials!");

	const isPasswordCorrect = await user.comparePassword(password);
	if (!isPasswordCorrect)
		throw new UnauthenticatedError("Invalid credentials!");

	sendToken(res, user, 201, "Successfully logged In");
};

// logout user
export const logoutUser = async (req: Request, res: Response) => {
	res.cookie("token", null, { expires: new Date(Date.now()) }).json({
		success: true,
		message: "successfully logged out!",
	});
};
