import { Document } from "mongoose";

export interface IUser {
	name: string;
	email: string;
	password: string;
}

export interface IUserDocument extends IUser, Document {
	createJWTToken: () => string;
	comparePassword: (candidatePassword: string) => Promise<boolean>;
}
