import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Link, useNavigate } from "react-router-dom"
//import { useNavigate } from "react-router-dom"


export default function Navbar(props) {
    let Navigate = useNavigate();
    let TOKEN = window.localStorage.token;

    let Logout = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/logout', {
                method: 'DELETE',
                headers: {
                    Authorization: "Bearer " + TOKEN,
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log("Data From Logout:", data);
            window.localStorage.removeItem("userID");
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("role");
            console.log(window.localStorage);
            props.setLogout(false);
            Navigate("/login");

        } catch (error) {
            console.log("catch error of LOGOUT fetch:", error);
        }
    }
    return (
        <>
            <nav className=" navbar navbar-expand-lg bg-body-tertiary container-fluid text-center p-3 bg-secondary-subtle">
                <div className="container-fluid">

                    <button className="navbar-toggler bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand" aria-current="page" to="/">Home</Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/blogs" >BLOGS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/text">TEXT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" nav-link active" to="/about">ABOUT</Link>
                            </li>
                            {!window.localStorage.token ? <li className="nav-item"><Link className=" nav-link active" to="/login">LOGIN</Link></li> : <></>}
                        </ul>

                        {/* <button className="btn btn-outline-success" type="submit">Login</button> */}

                    </div>
                </div>
                <div className="container-sm w-50">
                    <form className="d-flex w-50" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    {window.localStorage.token ? <button className="btn btn-outline-success" onClick={Logout} type="submit">Logout</button> : <></>}
                </div>
            </nav>
        </>
    )
}


Navbar.protoType = {
    title: PropTypes.string,
    placeHolder: PropTypes.string
}

Navbar.defaultProps = {
    title: "dogHealth",
    placeHolder: "defalt Search.."
}