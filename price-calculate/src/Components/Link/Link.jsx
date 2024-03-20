import PropTypes from 'prop-types';

const Link = ({route}) => {
    const {name, path} = route;
    return (
        <div className=''>
            <li className='mr-12 hover:bg-orange-400 p-2 lg:p-2'><a href={path}>{name}</a></li>
        </div>
    );
};

Link.propTypes = {
    route : PropTypes.object
};

export default Link;