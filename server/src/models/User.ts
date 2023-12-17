import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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
            select: false,
			minlength: 3,
			maxlength: 8,
		},
	},
	{ timestamps: true },
);

userSchema.pre("save", async function () {
	if (!this.isModified("password")) return;
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (
	candidatePassword: string,
) {
	return bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.CreateJWTToken = function () {
	const JWT_SECRET: string = process.env.JWT_SECRET;
	const JWT_LIFETIME: string = process.env.JWT_LIFETIME;

	return jwt.sign({ _id: this._id }, JWT_SECRET, { expiresIn: JWT_LIFETIME });
};

export default model<IUserDocument>("User", userSchema);
