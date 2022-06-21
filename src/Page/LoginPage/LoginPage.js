// import axios from 'axios';
import axios from 'axios';
import { useRef, useState } from 'react';
import request from '../../services';

// import LogoSvg from '../../assets/images/icons/LogoSvg.js';

const LoginPage =({setToken})=>{
	
	const [email , setEmail ] = useState("");
	const [password ,setPassword ] = useState("");
	// const [hasErorr , setHasErorr] = useState(false);

	const UserInput = useRef(null)
	const Userpassword = useRef(null);

	const data = {
		email : email,
		password: password
	}


	
	const handleSubmit = (e)=>{
		e.preventDefault();	
		const axios = require('axios');
		axios.post('http://192.168.0.140:8080/users/login', {
			email: 'qww@gmail.com',
			password: 'qw'
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	return(
		<div className="login">
			<form  className='login-form' onSubmit={handleSubmit}>
				<div className="logo">
					{/* <LogoSvg/> */}
				</div>
				<div className="login-form-icon">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16634 11.7183V16.6666H10.833V11.7183C14.1213 12.1283 16.6663 14.9333 16.6663 18.3333H3.33301C3.33304 16.7094 3.92566 15.1414 4.99968 13.9235C6.07369 12.7055 7.55526 11.9214 9.16634 11.7183ZM9.99967 10.8333C7.23717 10.8333 4.99967 8.59575 4.99967 5.83325C4.99967 3.07075 7.23717 0.833252 9.99967 0.833252C12.7622 0.833252 14.9997 3.07075 14.9997 5.83325C14.9997 8.59575 12.7622 10.8333 9.99967 10.8333Z" fill="#fff"/></svg>
				</div>
				<div className="login-form-inner">
					<input value={email} ref={UserInput} type="email" placeholder='User name' className='login-form-inner__input' onChange={(e)=>setEmail(e.target.value)}/>
				</div>
				<div className="login-form-inner">
					<input value={password} ref={Userpassword} type="password" placeholder='Password' className='login-form-inner__input' onChange={(e)=>setPassword(e.target.value)}/>
				</div>
				<button type='submit' className='login-form__button'>Login</button>
			</form>			
		</div>
	)
}

export default LoginPage;