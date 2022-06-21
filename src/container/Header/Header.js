import { useRef } from "react";
import { useState } from "react";
import { Link, useMatch } from "react-router-dom";

import userimg from '../../assets/images/unsplash_mEZ3PoFGs_k.svg'

const Header = ({props , notificationNumber =4  , username = 'Melissa Rose'}) =>{
	const [dark , setDark ] = useState('light')
	const [navbarOpen, setNavbarOpen] = useState(false)

	const InputRef = useRef();
	// input focus //
	const handelFocus = ()=>{
		InputRef.current.focus()
	}
	// inputBlur //
	const inputBlur =()=>{
		InputRef.current.value = ''
	}
	
	const handleToggle = () => {
		setNavbarOpen(!navbarOpen)
		console.log(navbarOpen);
	}
	const userActionHandel =()=>{}


	const LogOutHandel = ()=>{
		window.localStorage.removeItem('sessionToken')

	}

	return(
		<header className="header">
			<div className="header-search">
				<span className="header-search__icon" onClick={handelFocus}>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.91668 2.53334C4.94354 2.53334 2.53334 4.94354 2.53334 7.91668C2.53334 10.8898 4.94354 13.3 7.91668 13.3C10.8898 13.3 13.3 10.8898 13.3 7.91668C13.3 4.94354 10.8898 2.53334 7.91668 2.53334ZM0.833344 7.91668C0.833344 4.00466 4.00466 0.833344 7.91668 0.833344C11.8287 0.833344 15 4.00466 15 7.91668C15 11.8287 11.8287 15 7.91668 15C4.00466 15 0.833344 11.8287 0.833344 7.91668Z" fill="#3661ED"/><path fillRule="evenodd" clipRule="evenodd" d="M13.6327 14.1667L12.5 13.034L13.034 12.5L14.1667 13.6327L13.6327 14.1667Z" fill="#3661ED"/><path fillRule="evenodd" clipRule="evenodd" d="M13.555 13.555C13.8506 13.2594 14.3298 13.2594 14.6254 13.555L19.1667 18.0963L18.0963 19.1667L13.555 14.6254C13.2594 14.3298 13.2594 13.8506 13.555 13.555Z" fill="#3661ED"/></svg>
				</span>
				<input ref={InputRef} onBlur={inputBlur} type="search" name="search" className="header-search__input" placeholder="Search"/> 
			</div>

			<div className="header-user">
				<Link to={'/'} className="header-user-notification" >
					<span className="header-user-notification__number">{notificationNumber}</span>
					<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.7"><path d="M21.9635 20.4416L20.4134 17.8578C19.6975 16.6653 19.3193 15.2993 19.3193 13.9091V11.6458C19.3193 8.7885 17.4126 6.37178 14.8053 5.59267V3.9722C14.8053 2.97642 13.9956 2.16663 12.9998 2.16663C12.004 2.16663 11.1942 2.97642 11.1942 3.9722V5.59267C8.58701 6.37178 6.68035 8.7885 6.68035 11.6458V13.9091C6.68035 15.2993 6.30207 16.6643 5.58707 17.8569L4.03701 20.4407C3.95306 20.5806 3.95124 20.754 4.0316 20.8957C4.11196 21.0374 4.26092 21.125 4.42342 21.125H21.5762C21.7387 21.125 21.8885 21.0374 21.9689 20.8966C22.0492 20.7557 22.0465 20.5806 21.9635 20.4416Z" fill="#3661ED"/><path d="M10.1567 22.0278C10.6659 23.0913 11.7438 23.8334 12.9996 23.8334C14.2553 23.8334 15.3333 23.0913 15.8424 22.0278H10.1567Z" fill="#3661ED"/></g></svg>
				</Link>
				<div className="header-user-photo">
					<img src={userimg} alt="userPhoto"  className="header-user-photo__img" style={{'objectFit' : 'cover' }}/>
				</div>
				<button className="header-user-name" onClick={handleToggle}>
					<span className="header-user-name__text">{username}</span>
					<span className="header-user-name__icon"><svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.411 7.40678C5.21215 7.69378 4.78784 7.69378 4.589 7.40678L0.347536 1.28475C0.117796 0.953146 0.355124 0.5 0.758534 0.5L9.24147 0.500001C9.64488 0.500001 9.8822 0.953147 9.65246 1.28475L5.411 7.40678Z" fill="black"/></svg></span>
					


					<div className={`user-action ${navbarOpen ? ' active' : ''} `}>
						<span className="user-action-before"><svg width="25" height="20" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.411 7.40678C5.21215 7.69378 4.78784 7.69378 4.589 7.40678L0.347536 1.28475C0.117796 0.953146 0.355124 0.5 0.758534 0.5L9.24147 0.500001C9.64488 0.500001 9.8822 0.953147 9.65246 1.28475L5.411 7.40678Z" fill="white"/></svg></span>
						<Link to={'#'}  className="user-action-button" id="" onClick={handleToggle}>
							<span className="user-action-button__icon">
								<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.75 5.56775L14.25 7.06775V3.5H7.50002V7.25H3.75002V15.5H14.25V13.4323L15.75 11.9323V16.256C15.7498 16.4534 15.6713 16.6426 15.5316 16.7821C15.392 16.9216 15.2027 17 15.0053 17H2.99477C2.89628 16.9993 2.79888 16.9792 2.70815 16.9409C2.61742 16.9026 2.53513 16.8468 2.46597 16.7766C2.39681 16.7065 2.34215 16.6234 2.30509 16.5322C2.26804 16.4409 2.24933 16.3432 2.25002 16.2448V6.5L6.75227 2H14.9985C15.4125 2 15.75 2.34125 15.75 2.744V5.56775ZM16.3335 7.10525L17.394 8.1665L11.5605 14L10.4985 13.9985L10.5 12.9395L16.3335 7.106V7.10525Z" fill="#037A4A"/></svg>
							</span>
							<span className="user-action-button__text edit">Edit</span>
						</Link>
						<Link to={'#'} className="user-action-button" id="" onClick={handleToggle}>
							<span className="user-action-button__icon">
								<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.25 3.50003V2.00003H12.75V3.50003H16.5V5.00003H15V16.25C15 16.4489 14.921 16.6397 14.7803 16.7804C14.6397 16.921 14.4489 17 14.25 17H3.75C3.55109 17 3.36032 16.921 3.21967 16.7804C3.07902 16.6397 3 16.4489 3 16.25V5.00003H1.5V3.50003H5.25ZM4.5 5.00003V15.5H13.5V5.00003H4.5ZM6.75 7.25003H8.25V13.25H6.75V7.25003ZM9.75 7.25003H11.25V13.25H9.75V7.25003Z" fill="#CB0D0D"/></svg>
							</span>
							<span className="user-action-button__text delate">Delete</span>
						</Link>
						<Link to={'#'} className="user-action-button" id="" onClick={handleToggle}>
							<span className="user-action-button__icon">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="#333333" strokeOpacity="0.8" ststrokewidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 17L21 12L16 7" stroke="#333333" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 12H9" stroke="#333333" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
							</span>
							<span className="user-action-button__text log">Log out</span>
						</Link>
					</div>

				</button>

				
			</div>

		</header>
	)
}

export default Header;