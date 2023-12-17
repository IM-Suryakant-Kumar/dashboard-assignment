import { createContext, useContext, useState } from "react";
import IUser from "../types/user";
import { login, logout, signup } from "../apis/auth";

interface IAuthContext {
	user: IUser | null;
	signupUser: (user: IUser) => Promise<void>;
	loginUser: (user: IUser) => Promise<void>;
	logoutUser: () => Promise<void>;
}

const authContext = createContext<IAuthContext | null>(null);

type Props = {
	children: React.ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }) => {
	const [user, setUser] = useState<IUser | null>(null);

	const signupUser = async (user: IUser) => {
		const data = await signup(user);
		data.success && setUser(data.user);
	};

	const loginUser = async (user: IUser) => {
		const data = await login(user);
		data.success && setUser(data.user);
	};

	const logoutUser = async () => {
		const data = await logout();
		data.success && setUser(null);
	};

	return (
		<authContext.Provider
			value={{ user, signupUser, loginUser, logoutUser }}>
			{children}
		</authContext.Provider>
	);
};

const useUser = () => useContext(authContext) as IAuthContext;

export { AuthProvider, useUser };
