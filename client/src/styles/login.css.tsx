import styled from "styled-components";

export const Container = styled.div`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Wrapper = styled.div`
	background-color: var(--primary-color);
	width: 100%;
	max-width: 400px;
	padding: 2em 1em;
    box-shadow: 0.1em -0.1em 0.3125em 0.01em ragba(0, 0, 0, 0.5);
`;

export const Title = styled.h2`
	font-family: "Cinzel", serif;
    font-weight: bolder;
	text-align: center;
    color: var(--logo-color);
`;

export const Form = styled.form`
    margin-top: 1em;
`;

export const Input = styled.input`
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid var(--logo-color);
    margin-top: 1em;
    padding: 0.5em;
`;

export const Button = styled.button`
    width: 100%;
    margin-top: 2em;
    padding: 0.5em;
    border: none;
    background-color: var(--logo-color);
    color: var(--primary-color);
    text-transform: uppercase;
    font-weight: bolder;
    cursor: pointer;
`

export const Subtitle = styled.p`
    text-align: center;
    margin-top: 0.5em;
    font-size: 0.875rem;
`
