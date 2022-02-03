import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import loginimage from '../../images/cdfdfd.png'
const Login = () => {
    const { handleUserLogin, logInusingGoogle, handleEmailChange, handlePasswordChange, handleRegistration } = useAuth();

    return (
        <div className="container ">

            <div>
                <img src={loginimage} className='img-fluid' alt="" />
            </div>
            <div className="login-box d-flex align-items-center justify-content-center mt-4 " style={{ width: '100%' }}>
                <div className="login bg-light" >

                    <div className="login-box ">
                        <h2 className="text-primary">Login Form</h2>
                        <form onSubmit={handleRegistration}>
                            <p className="text-danger"></p>

                            <input
                                onChange={handleEmailChange}
                                className="input-felid"
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                                required
                            />
                            <br />
                            <input
                                onChange={handlePasswordChange}
                                className="input-felid"
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                                required
                            />
                            <br />

                        </form>
                        <div className="mt-4">
                            <button onClick={handleUserLogin} className="btn btn-primary">Login</button>
                        </div>
                    </div>
                    <br />

                    <div>


                        <Link to="/home">
                            <button className="me-2 btn btn-warning" onClick={logInusingGoogle}> Login with Google
                            </button>
                        </Link>

                    </div>


                </div>



            </div>
        </div>
    );
};

export default Login;