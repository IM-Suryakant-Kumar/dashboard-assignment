import { Form } from "react-router-dom";
import {
	Button,
	Container,
	Input,
	Subtitle,
	Title,
	Wrapper,
} from "../styles/login.css";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Login</Title>
				<Form>
					<Input
						type="email"
						name="email"
						placeholder="Email"
					/>
					<Input
						type="password"
						name="password"
						placeholder="password"
					/>
					<Button>Login</Button>
				</Form>
				<Subtitle>
					Already have an account? <Link to="signup">Signup</Link>
				</Subtitle>
			</Wrapper>
		</Container>
	);
};

export default Login;
