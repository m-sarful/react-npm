import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './Users.css';

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h3>Users {users.length}</h3>
            <p>Our users section here</p>
            <div className='users'>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

Users.propTypes = {
    
};

export default Users;