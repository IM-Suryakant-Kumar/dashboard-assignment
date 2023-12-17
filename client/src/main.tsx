import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./styles/index.ts";
import MainContextProvider from "./context/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MainContextProvider>
			<App />
		</MainContextProvider>
		<GlobalStyle />
	</React.StrictMode>,
);
