import { useRef } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    
    const nameRef = useRef();
    const surnameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();


    const onSubmit = (e) => {
        e.preventDefault();
    }

    // Retorno
    return ( 
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onClick={onSubmit}>
                    <h1 className="title">
                        Create an account
                    </h1>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Surname" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm your password" />
                    <button className="btn btn-block">Login</button>
                    <p style={{textAlign: 'center', marginTop: 25}}>
                        Have an account? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    )
};

export default SignUp;
