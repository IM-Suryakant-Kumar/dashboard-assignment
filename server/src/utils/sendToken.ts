import { Response } from "express";
import { IUserDocument } from "user";

const sendToken = (
	res: Response,
	user: IUserDocument,
	statusCode: number,
	message: string,
) => {
	const token = user.createJWTToken();

	const COOKIE_LIFETIME: number = parseInt(process.env.COOKIE_LIFETIME, 10);
	res.status(statusCode)
		.cookie("token", token, {
			expires: new Date(
				Date.now() * COOKIE_LIFETIME * 24 * 60 * 60 * 1000,
			),
		})
		.json({
			success: true,
			message,
			user: { name: user.name, email: user.email },
		});
};

export default sendToken;
