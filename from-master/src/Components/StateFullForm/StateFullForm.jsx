import { useState } from "react";

const StateFullForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
          if(password.length < 6){
            setError('Password must be 6 character or longer')
        }
        else{
            setError('');
            console.log(name, email, password);
        }
    }

    const handleNameChange = e =>{
        setName(e.target.value);
    }

    const handleEmailChanged = e =>{
        setEmail(e.target.value);
    }

    const handlePassChanged = e =>{
        setPassword(e.target.value);
    }

    return (
        <div>
             <form onSubmit={handleSubmit}>
            <input onChange={handleNameChange} value={name} type="text" name="name" id="" />
            <br />
            <input onChange={handleEmailChanged} type="email" name="email" id="" />
            <br />
            <input onChange={handlePassChanged} type="password" name="password" id="" required />
            <br />
           <input type="submit" value="Submit" />
           {
            error && <p>{error}</p>
           }
           </form>
        </div>
    );
};

export default StateFullForm;