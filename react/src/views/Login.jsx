import { Link } from "react-router-dom";

const Login = () => {
    // Lógica

    const onSubmit = (e) => {
        e.preventDefault();
    }

    // Retorno
    return ( 
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onClick={onSubmit}>
                    <h1 className="title">
                        Login into your account
                    </h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="btn btn-block">Login</button>
                    <p style={{textAlign: 'center', marginTop: 25}}>
                        Not registered? <Link to="/signup">Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    )
};

export default Login;
