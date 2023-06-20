import React, { useState, useEffect } from 'react';

function UserProfile(props) {
    let TOKEN = window.localStorage.token;
    const [items, setItems] = useState({});
    const [phoneVerified, setPhoneVerified] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);
    let phone;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/userprofile', {
                    method: 'GET',
                    headers: {
                        Authorization: "Bearer " + TOKEN,
                        'Content-Type': 'application/json'
                    }
                });
                //console.log(props.fun.checkOut);
                //console.log("CheckOut Called");
                console.log(response);
                const data = await response.json();
                //let Data = data.result.result.cartValueObj;
                let Data = data.result;
                console.log(Data);
                phone = Data.phoneVerified.toString();
                console.log(phone);
                console.log(typeof phone);
                setItems(Data);
                setPhoneVerified(phone)
                //let verif = items.phoneVerified.toString();
                //setPrice(cartPrice);
                //console.log(data.result.result);
                //props.setLogout(false);
                //Navigate("/login");

            } catch (error) {
                console.log("catch error of LOGOUT fetch:", error);
            } finally {
                setIsLoading(false);
                props.setAlert(null);
            }
        };

        fetchData();
    }, []);




    let updateProfile = async (event) => {
        // let formId = document.getElementById("updateForm");
        // console.log(formId);
        // var formData = new FormData(formId);
        let obj = {
            phone:document.getElementById("phone").value === "" ? items.phone:document.getElementById("phone").value,
            firstName:document.getElementById("firstName").value === "" ? items.firstName:document.getElementById("firstName").value,
            lastName:document.getElementById("lastName").value === "" ? items.lastName:document.getElementById("lastName").value,
            userName:document.getElementById("userName").value === "" ? items.userName:document.getElementById("userName").value,
            password:document.getElementById("password").value === "" ? items.password:document.getElementById("password").value,
            DOB:document.getElementById("DOB").value === "" ? items.DOB:document.getElementById("DOB").value,
        }
        try {
            const response = await fetch('http://localhost:5000/api/user/update', {
                method: 'PATCH',
                headers: {
                    Authorization: "Bearer " + TOKEN,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            });
            //console.log(props.fun.checkOut);
            console.log("CheckOut Called");
            console.log(response);
            const data = await response.json();
            // let Data = data.result.result.cartValueObj;
            // let cartPrice = data.result.result.price;
            // setItems(Data);
            // setPrice(cartPrice);
            console.log(data);
            //props.setLogout(false);
            //Navigate("/login");

        } catch (error) {
            console.log("catch error of LOGOUT fetch:", error);
        } finally {
            setIsLoading(false);
            props.setAlert(null);
        }
    }
   

    /***    *******************************************************************/

    /***    *******************************************************************/

        return (
        <>
            <div className="container">
                <h1 className='display-5 text-center mb-5 '>User Profile</h1>
                <form>
                    {/* <!-- Phone --> */}
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" className="form-control" id="phone" name="phone" placeholder={items.phone} />
                    </div>

                    {/* <!-- First Name --> */}
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" placeholder={items.firstName} />
                    </div>

                    {/* <!-- Last Name --> */}
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" placeholder={items.lastName} />
                    </div>

                    {/* <!-- Username --> */}
                    <div className="form-group">
                        <label htmlFor="userName">Username:</label>
                        <input type="text" className="form-control" id="userName" name="userName" placeholder={items.userName} />
                    </div>

                    {/* <!-- Email --> */}
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" name="email" value={items.email} />
                    </div>

                    {/* <!-- Password --> */}
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Please, Enter new PASSWORD to update it" />
                    </div>

                    {/* <!-- DOB --> */}
                    <div className="form-group">
                        <label htmlFor="DOB">DOB:</label>
                        <input type="DOB" className="form-control" id="DOB" name="DOB" placeholder={items.DOB} />
                    </div>
                    <br />
                    {/* <!-- Verified --> */}
                    <div className="form-group">
                        <div className='fs-5'>Phone Verified: {phoneVerified}</div>
                    </div>
                    <br />

                </form>
                <button onClick={updateProfile} className="btn btn-primary">Submit</button>
            </div>
        </>
    )

        // const [formData, setFormData] = useState({
        //     firstName: '',
        //     lastName: '',
        //     email: ''
        // });

        // const handleChange = (e) => {
        //     setFormData({ ...formData, [e.target.name]: e.target.value });
        // };

        // const handleSubmit = (e) => {
        //     e.preventDefault();

        //     const userId = "123"; // Replace with the actual user ID
        //     const url = 'http://localhost:5000/api/user/update'; // Replace with the actual API endpoint

        //     fetch(url, {
        //         method: 'PATCH',
        //         body: JSON.stringify(formData),
        //         headers: {
        //             Authorization: "Bearer " + TOKEN,
        //             'Content-Type': 'application/json'
        //         }
        //     })
        //         .then(response => response.json())
        //         .then(data => {
        //             console.log('User updated successfully:', data);
        //             // Handle success scenario
        //         })
        //         .catch(error => {
        //             console.error('Error updating user:', error);
        //             // Handle error scenario
        //         });
        // };

        // return (
        //     <form onSubmit={handleSubmit}>
        //         <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
        //         <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
        //         <button type="submit">Update User</button>
        //     </form>
        // );
    
}

export default UserProfile