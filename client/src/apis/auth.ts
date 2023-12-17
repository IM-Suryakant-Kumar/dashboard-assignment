import IApiRes from "../types/response";
import IUser from "../types/user";
import asyncWrapper from "../utils/asyncWrapper";
import axios from "./axios";

export const signup = (user: IUser) =>
	asyncWrapper(async () => {
		const { data } = (await axios.post("/auth/register", user)) as IApiRes;
		return data;
	});

export const login = (user: IUser) =>
	asyncWrapper(async () => {
		const { data } = (await axios.post("/auth/login", user)) as IApiRes;
		return data;
	});

export const logout = () =>
	asyncWrapper(async () => {
		const { data } = (await axios.get("/auth/logout")) as IApiRes;
		return data;
	});
