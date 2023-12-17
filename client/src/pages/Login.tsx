import React from "react";
import {
	Button,
	Container,
	Form,
	Input,
	Subtitle,
	Title,
	Wrapper,
} from "../styles/login.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "../context";
import IUser from "../types/user";

const Login = () => {
	const { loginUser } = useUser();
	const navigate = useNavigate();
    const [searchParams] = useSearchParams()

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		await loginUser({ email, password } as IUser);
        const pathname = searchParams.get("redirectTo") || "/host";
		navigate(pathname, { replace: true });
	};

	return (
		<Container>
			<Wrapper>
				<Title>LogIn</Title>
				<Form onSubmit={handleSubmit}>
					<Input
						type="email"
						name="email"
						placeholder="Email"
					/>
					<Input
						type="password"
						name="password"
						placeholder="password"
						minLength={3}
						maxLength={8}
					/>
					<Button>Login</Button>
				</Form>
				<Subtitle>
					Don't have any account? <Link to="/signup">Signup</Link>
				</Subtitle>
			</Wrapper>
		</Container>
	);
};

export default Login;
