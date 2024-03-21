import PropTypes from 'prop-types';
import './User.css'
import { Link, useNavigate } from 'react-router-dom';
const User = ({user}) => {
    const {id, name, email, website, phone} = user;
    const navigate = useNavigate();
    const handleShowDetail = () =>{
        navigate(`/user/${id}`)
    }
    return (
        <div className='user'>
            <h2>Name : {name}</h2>
            <p>Phone : {phone}</p>
            <p>email : {email}</p>
            <p>Website : {website}</p>
             <Link to={`/user/${id}`}><button onClick={handleShowDetail}>Show Detail</button></Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
};

export default User;