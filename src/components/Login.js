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

            if (response.ok) {
                console.log('Login successful: ', response);
                // Successful login, perform further actions (e.g., redirect, update state)
                let data = await response.json();
                setIsLoading(false);
                props.setAlert(null);
                setData(data);
                console.log('Login successful: ', data.result.result.token);
                console.log('Login successful: ', typeof data.result.result);
                props.setLogout(true);
                window.localStorage.setItem("userID",data.result.result.userID);
                window.localStorage.setItem("token",data.result.result.token);
                window.localStorage.setItem("role",data.result.result.role);
                props.showAlert("success", "Success", "Authorized User");
                
                // window.localStorage.UserData.userID = data.result.result.userID;
                // window.localStorage.UserData.role = data.result.result.role;
                console.log(window.localStorage);
                navigate('/');
            } if(response.ok === false) {
                // Handle failed login (e.g., display error message)
                //setIsLoading(false);
                props.setAlert(null);
                //props.showAlert("success", "Success", "Authorized User");
                props.showAlert("danger", "Failed", "Authentication Error");
            }
        } catch (error) {
            console.error("Error: ",error);
        }
    };

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title display-1 text-center mb-3">Login</h5>
                                <form onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <label className="fs-5"htmlFor="email">Email</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="fs-5" htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
