import "express-async-errors";
import { config } from "dotenv";
import morgan from "morgan";
import cors from "cors";
import express from "express";
import notFoundMiddleware from "./middlewares/not-found";
import errorHanlderMiddleware from "./middlewares/error-handler";

config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(cors());

const PORT: number = parseInt(process.env.PORT, 10) || 4000;

app.use(notFoundMiddleware);
app.use(errorHanlderMiddleware);
const start = async () => {
	try {
		app.listen(PORT, () =>
			console.log(`Server is listen on port ${PORT}...`),
		);
	} catch (error) {
		console.log(error);
	}
};

start();
