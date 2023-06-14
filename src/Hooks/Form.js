import './Form.css';
import Useform from './Useform';

function Form() {

    //Final submit function
    const formLogin = () => {

        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
    }

    //Custom hook call
    const { handleChange, values, errors, handleSubmit } = Useform(formLogin);


    return (
        <div className="App">
            <h1>User Registration Form</h1>
            <form onSubmit={handleSubmit}>

                <input type="text" 
                minLength='5' 
                required 
                name="username" 
                placeholder="Enter Your Name" 
                onChange={handleChange} 
                className="input"/>
                {
                    errors.username && <h3>{errors.username}</h3>

                }

                <input type="number" 
                size='10' 
                required 
                name="number" 
                placeholder="Enter Mobile Number" 
                onChange={handleChange} 
                className="input"/>
                {
                    errors.number && <h3>{errors.number}</h3>

                }

                <input type="email" 
                name="email" 
                required
                placeholder="Enter Your E-mail" 
                onChange={handleChange} 
                className="input"/>
                {
                    errors.email && <h3>{errors.email}</h3>
                }

                <input minLength='8' 
                type="password" 
                required
                name="password" 
                placeholder="Enter Your Password" 
                onChange={handleChange} 
                className="input"/>
                {
                    errors.password && <h3>{errors.password}</h3>

                }
                <input minLength='8' 
                type="password" 
                required
                name="password" 
                placeholder="Please Confirm YourPassword" 
                onChange={handleChange} 
                className="input"/>
                {
                    errors.password && <h3>{errors.password}</h3>

                }

                <input type="submit" value="Submit" className="submit" />
            </form>

        </div>
    );
}

export default Form;