import { Outlet } from "react-router-dom";
import { Container } from "../styles/layout.css";

const Layout = () => {
	

	return (
		<Container>
			<Outlet />
		</Container>
	);
};

export default Layout;
