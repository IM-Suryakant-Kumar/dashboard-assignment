import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login.tsx";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path="/"
				element={<Layout />}>
                    <Route path="/login" element={<Login />} />
				<Route
					path="*"
					element={<h1>404 - PAGE NOT FOUND</h1>}
				/>
			</Route>,
		),
	);

	return <RouterProvider router={router} />;
}

export default App;
