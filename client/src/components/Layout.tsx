import { Outlet } from "react-router";
import { Container } from "../styles/layout.css";
import MainContextProvider from "../context";

const Layout = () => {
	return (
		<MainContextProvider>
			<Container>
				<Outlet />
			</Container>
		</MainContextProvider>
	);
};

export default Layout;
