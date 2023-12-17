import {
	Button,
	Container,
	Form,
	Input,
	Subtitle,
	Title,
	Wrapper,
} from "../styles/signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
	return (
		<Container>
			<Wrapper>
				<Title>SignUp</Title>
				<Form>
					<Input
						type="text"
						name="name"
						placeholder="name"
					/>
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
					
                    Already have an account? <Link to="/login">Login</Link>
				</Subtitle>
			</Wrapper>
		</Container>
	);
};

export default Signup;
