import PropTypes from 'prop-types';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate();
    const {name, email} = user;
    const handleBack = () =>{
        navigate(-1);
    }
    return (
        <div>
            <h3>Details about user</h3>
            <h4>Name : {name}</h4>
            <p>Email : {email}</p>
            <button onClick={handleBack}>Go Back</button>
        </div>
    );
};

UserDetails.propTypes = {
    
};

export default UserDetails;