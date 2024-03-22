// import PropTypes from 'prop-types';

const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('btn clicked');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="" />
            <br />
            <input type="email" name="email" id="" />
            <br />
            <input type="number" name="phone" id="" />
            <br />
           <input type="submit" value="Submit" />
           </form>
        </div>
    );
};

SimpleForm.propTypes = {
    
};

export default SimpleForm;