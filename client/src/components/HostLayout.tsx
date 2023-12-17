import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUser } from "../context";

const HostLayout = () => {
    const { user } = useUser();
	const location = useLocation();
	const pathname = location.pathname || "/host";

	return (
		<div>
			{user ? (
				<Outlet />
			) : (
				<Navigate to={`/login?redirectTo=${pathname}`} />
			)}
		</div>
	);
};

export default HostLayout;
