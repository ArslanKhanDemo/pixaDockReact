import React, { useState, useEffect } from 'react';

function Cart(props) {
    let TOKEN = window.localStorage.token;
    const [items, setItems] = useState([]);
    const [price, setPrice] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/user/mycart', {
                    method: 'GET',
                    headers: {
                        Authorization: "Bearer " + TOKEN,
                        'Content-Type': 'application/json'
                    }
                });
                //console.log(props.fun.checkOut);
                console.log("CheckOut Called");
                console.log(response);
                const data = await response.json();
                let Data = data.result.result.cartValueObj;
                let cartPrice = data.result.result.price;
                setItems(Data);
                setPrice(cartPrice);
                console.log(data.result.result);
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













    return (
        <>
            <div className='text-center'>
                <div className="display-3">My Cart</div>
            </div>
            <div className='fixed-size-for-div'>
                <div className="row row-cols-1 row-cols-lg-1 g-2 g-lg-4 grid-gutter-width: 1.5rem">
                    {items.map((item, index) => (

                        <div key={index}>
                            <div className="nav-link active">
                                <div className="container " >
                                    <div>
                                        <div className="col">
                                            <div className="col p-3 border">
                                                <img src={`../uploads/${item.image}`} alt="Blog Image 1" className="fixed-size" />
                                                <h5 className="card-title">Name: {item.name}</h5>
                                                <h5 className="card-title">Category: {item.category}</h5>
                                                <h5 className="card-title">Price: {item.price}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                    <div className='text-center'>
                        <div className="display-3">Total: {price}$</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart