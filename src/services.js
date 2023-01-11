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
	put(endpoint, body) {
		return axiosInstancia.put(endpoint, body);
	},
	delete(endpoint) {
		return axiosInstancia.delete(endpoint);
	},
};

export function getCep(cep) {
	return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}
