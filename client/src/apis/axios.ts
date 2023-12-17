import axios from "axios";

const VITE_BASE_URL: string = import.meta.env.VITE_BASE_URL;
console.log(VITE_BASE_URL)
const instance = axios.create({
	baseURL: VITE_BASE_URL,
	withCredentials: true,
});

export default instance;
