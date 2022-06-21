import { Link } from "react-router-dom";




const AdminListItem = ({name ,surname, phoneNumber, WorkingTime , LastUsedTime , Userid = 0})=>{

	return(
		<Link to={'#'} className="admin-list" id={Userid+1}>
			<div className="admin-list-number">
				{Userid+1}
			</div>

			<div className="admin-list-name">
				<span className="admin-list-name__text">{surname}</span>
				<span className="admin-list-name__text">{name}</span>
			</div>
			<div className="admin-list-number">
				<span>{phoneNumber}</span>
			</div>
			<div className="admin-list-workTime">
				<span className="admin-list-workTime__text">
					{WorkingTime}
				</span>
			</div>
			<div className="admin-list">

			</div>
		</Link>
	)
}

export default AdminListItem;