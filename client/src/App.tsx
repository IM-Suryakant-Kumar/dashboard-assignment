import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Route,
	RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Layout />}>
			<Route
				index
				element={<Navigate to="host" />}
			/>
			<Route
				path="host"
				element={<HostLayout />}>
				R
			</Route>
			<Route
				path="/login"
				element={<Login />}
			/>
			<Route
				path="/signup"
				element={<Signup />}
			/>
			<Route
				path="*"
				element={<h1>404 - PAGE NOT FOUND</h1>}
			/>
		</Route>,
	),
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
