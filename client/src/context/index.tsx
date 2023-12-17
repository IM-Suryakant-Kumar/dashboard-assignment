import { AuthProvider } from "./AuthProvider";

type Props = {
	children: React.ReactNode;
};

const MainContextProvider: React.FC<Props> = ({ children }) => (
	<AuthProvider>{children}</AuthProvider>
);

export { useUser } from "./AuthProvider"
export default MainContextProvider;
