import axios from "axios";

const axiosInstancia = axios.create({
	baseURL: "http://localhost:3000/",
});

export const api = {
	get(endpoint) {
		return axiosInstancia.get(endpoint);
	},
	post(endpoint, body) {
		return axiosInstancia.post(endpoint, body);
	},
};
