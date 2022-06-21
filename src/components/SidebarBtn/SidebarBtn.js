import { useEffect } from "react";
import { Link } from "react-router-dom";



const SidebarBtn = ({path , name , icon, dataSet})=>{


	const hendlerFn = (e)=>{
		const btn = document.querySelectorAll('.sidebarBtn');

		btn.forEach((item)=>{
			item.classList.remove('active')
		})

		e.currentTarget.classList.add('active');
	}


	return(
		<Link to={path} className="sidebarBtn" onClick={hendlerFn}  data-path={dataSet}>
			
			<span className="sidebarBtn__icon">{icon}</span>
			<span className="sidebarBtn__text">{name}</span>
			
		</Link>
	)
}

export default SidebarBtn;