import { useUser } from "../context";
import {
	Button,
	Container,
	Form,
	Input,
	Subtitle,
	Title,
	Wrapper,
} from "../styles/signup.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import IUser from "../types/user";

const Signup = () => {
	const { signupUser } = useUser();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		await signupUser({ name, email, password } as IUser);
		const pathname = searchParams.get("redirectTo") || "/host";
		navigate(pathname, { replace: true });
	};

	return (
		<Container>
			<Wrapper>
				<Title>SignUp</Title>
				<Form onSubmit={handleSubmit}>
					<Input
						type="text"
						name="name"
						placeholder="name"
                        minLength={3}
                        required
					/>
					<Input
						type="email"
						name="email"
						placeholder="Email"
                        required
					/>
					<Input
						type="password"
						name="password"
						placeholder="password"
                        minLength={3}
                        maxLength={8}
                        required
					/>
					<Button>Login</Button>
				</Form>
				<Subtitle>
					Already have an account? <Link to="/login">Login</Link>
				</Subtitle>
			</Wrapper>
		</Container>
	);
};

export default Signup;
