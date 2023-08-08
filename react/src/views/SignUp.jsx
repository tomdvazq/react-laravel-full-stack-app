import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useStateContext } from "../contexts/ContextProvider";

const SignUp = () => {
    
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const {setUser, setToken} = useStateContext();
    const [errors, setErrors] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();

        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }

        console.log(payload);

        axiosClient.post("/signup", payload)
            .then((data) => {
                setUser(data.user)
                setToken(data.token);
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            })
    }

    // Retorno
    return ( 
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">
                        Create an account
                    </h1>
                    {
                        errors && <div className="alert">
                            {Object.keys(errors).map(key => (
                                <p key={key}>{errors[key][0]}</p>
                            ))}
                        </div>
                    }
                    <input ref={nameRef} type="text" placeholder="Name" />
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
