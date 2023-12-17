import { Form } from "react-router-dom";
import { Button, Container, Input, Title, Wrapper } from "../styles/login.css";

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
                    <Button>Signup</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
