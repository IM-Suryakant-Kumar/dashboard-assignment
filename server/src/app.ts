import "express-async-errors";
import { config } from "dotenv";
import morgan from "morgan";
import cors from "cors";
import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import connectDB from "./db";
import notFoundMiddleware from "./middlewares/not-found";
import errorHanlderMiddleware from "./middlewares/error-handler";
// router
import authRouter from "./routes/auth";

config();

const app = express();

// middleware
const CLIENT_URL: string = process.env.CLIENT_URL
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(cors({
    origin: CLIENT_URL,
    credentials: true
}));
app.use(cookieParser())

// router
app.use("/auth", authRouter)

app.get("/", async (req: Request, res: Response) => {
    res.status(200).send(`
        <h2 
            style="
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: sans-serif;
            ">
                Working...👍
            <h2>
    `)
})

app.use(notFoundMiddleware);
app.use(errorHanlderMiddleware);
const PORT: number = parseInt(process.env.PORT, 10) || 4000;
const start = async () => {
	try {
        const MONGO_URL: string = process.env.MONGO_URL
        await connectDB(MONGO_URL)
		app.listen(PORT, () =>
			console.log(`Server is listen on port ${PORT}...`),
		);
	} catch (error) {
		console.log(error);
	}
};

start();
