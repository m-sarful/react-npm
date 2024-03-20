import PropTypes from 'prop-types';

const PriceOption = ({ option }) => {
    const {name, price, features} = option;
    return (
        <div>
            <h2>
                <span className='text-3xl'>{price}</span>
                <span className='text-xl'>/month</span>
            </h2>
            <h4>{name}</h4>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object,
};

export default PriceOption;