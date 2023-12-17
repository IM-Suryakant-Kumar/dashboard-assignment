import { Schema, model } from "mongoose";
import { IUserDocument } from "user";

const userSchema = new Schema<IUserDocument>(
	{
		name: {
			type: String,
			required: [true, "Please Provide name"],
			minlength: 3,
			maxlength: 25,
		},
		email: {
			type: String,
			required: [true, "Please provide email"],
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Please provide password"],
			minlength: 3,
			maxlength: 8,
		},
	},
	{ timestamps: true },
);

export default model<IUserDocument>("User", userSchema);
