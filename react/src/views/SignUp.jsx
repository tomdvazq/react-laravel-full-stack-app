import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

const SignUp = () => {
    
    const nameRef = useRef();
    const surnameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const {setUser, setToken} = useStateContext();

    const onSubmit = (e) => {
        e.preventDefault();

        const payload = {
            name: nameRef.current.value,
            surname: surnameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }

        axiosClient.post("/signup",payload)
            .then((data) => {
                setUser(data.user)
                setToken(data.token);
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                }
            })
    }

    // Retorno
    return ( 
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onClick={onSubmit}>
                    <h1 className="title">
                        Create an account
                    </h1>
                    <input ref={nameRef} type="text" placeholder="Name" />
                    <input ref={surnameRef} type="text" placeholder="Surname" />
                    <input ref={emailRef} type="email" placeholder="Email" />
                    <input ref={passwordRef} type="password" placeholder="Password" />
                    <input ref={passwordConfirmationRef} type="password" placeholder="Confirm your password" />
                    <button className="btn btn-block">Register</button>
                    <p style={{textAlign: 'center', marginTop: 25}}>
                        Have an account? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    )
};

export default SignUp;
