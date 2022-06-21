import axios from "axios";


const request = axios.create({
	baseURL: 'http://192.168.0.140:8080/users/',
	headers : {"Content-Type": "aplication/json"} 
})

export default request