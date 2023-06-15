import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

function Login(props) {
    let navigate = useNavigate();
    const [data, setData] = useState(); // Initialize as an empty array
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async (event) => {
        event.preventDefault();

        if (isLoading) {

            props.showAlert("warning", "Loading", "Please wait...") && <div>Error: {error}</div>;;
        }
        try {
            const response = await fetch('http://localhost:5000/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok === true || response.ok === true) {
                // Successful login, perform further actions (e.g., redirect, update state)
                setIsLoading(false);
                props.setAlert(null);
                let data = await response.json();
                console.log(data);
                if (data.result.hasOwnProperty("token")) {
                    console.log("TOKEN: ", data.result.hasOwnProperty("token"));
                    console.log("ERROR: ", data.result.hasOwnProperty("error"));
                    console.log("Login");
                    setData(data);
                    props.setLogout(true);
                    window.localStorage.setItem("userID", data.result.userID);
                    window.localStorage.setItem("token", data.result.token);
                    window.localStorage.setItem("role", data.result.role);
                    
                    // window.localStorage.UserData.userID = data.result.result.userID;
                    // window.localStorage.UserData.role = data.result.result.role;
                    //console.log(window.localStorage);
                    navigate('/');
                    props.showAlert("success", "Success", "Authorized User");
                }
                else if (data.result.hasOwnProperty("error")) {
                    console.log("error");
                    console.log("TOKEN: ", data.result.hasOwnProperty("token"));
                    console.log("ERROR: ", data.result.hasOwnProperty("error"));
                    props.showAlert("danger", "Authentication", "Failed");
                }

                // if (data.result.result === "object") {
                //     console.log(typeof data.result.result);
                //     props.showAlert("success", "Success", "Authorized User");
                // }
                // if (data.result.result === "string") {
                //     console.log(typeof data.result.result);
                //     props.showAlert("danger", "Authentication", "Failed");
                // }
            } 
            // if (response.ok === false) {
            //     console.log(response.ok);
            //     let data = await response.json();
            //     console.log(data);
            //     // Handle failed login (e.g., display error message)
            //     //setIsLoading(false);
            //     props.setAlert(null);
            //     //props.showAlert("success", "Success", "Authorized User");
            //     props.showAlert("danger", "Failed", "Authentication Error");
            // }
        } catch (error) {
            console.error("Error: ", error);
        }

    };
    const SignUp = () => {
        console.log("SignUp CALLED");
        navigate("/signup");

    }

    return (
        <>
            <div className="container mt-5 mb-5 ">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title display-1 text-center mb-3">Login</h5>
                                <form onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <br />
                                        <input
                                            placeholder='Email'
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <br />
                                        <input
                                            placeholder='Password'
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <br />
                                    <div className="container">
                                        <div className="row">
                                            <div className='col'>
                                                <button type="submit" className="btn btn-primary ">Login</button>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                                <br />
                                <div className="container">
                                    <div className="col">
                                        <button onClick={SignUp} className="btn btn-success col d-flex justify-content-end">SignUp</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
}

export default Login;
