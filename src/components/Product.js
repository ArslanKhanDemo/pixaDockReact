import React from 'react'
import { Link, useNavigate } from "react-router-dom"
//import Notification from "./Notification";
function Product(props) {
    let item = {
        _id: window.localStorage.Product_ID,
        category: window.localStorage.Product_Category,
        name: window.localStorage.Product_Name,
        image: window.localStorage.Product_image,
        price: window.localStorage.Product_price,
    }



    let Navigate = useNavigate();
    let addToCart = async () => {
        try {
            let TOKEN = window.localStorage.getItem("token");
            console.log("async add to cart");
            let response = await fetch(`http://localhost:5000/api/user/addtocart/${item._id}`, {
                method: 'POST',
                headers: {
                    Authorization: "Bearer " + TOKEN,
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok === true) {
                console.log(response);
                let data = await response.json();
                console.log(data.result.result);
                if (typeof data.result.result === "string") {
                    console.log(typeof data.result.result);
                    //props.showAlert("warning","Warning","The Product is already Added To your Cart");
                    alert('ALERT: The Product is already Added To your Cart');
                }
                if (typeof data.result.result === "object") {
                    console.log(typeof data.result.result);
                    alert('ALERT: The Product is Added To your Cart')
                    Navigate('/');
                    //props.showAlert("success", "Success", "The Product is Added To your Cart");
                }

            }else{
                let data = await response.json()
                console.log(data);
                alert(`${data.result.result}`);
                //props.showAlert("danger", "Warning", `${data.result.result}`);
            }
        } catch (error) {
            console.log("Error from addtoCart of Product Component: ", error);
            props.showAlert("danger", "Warning", `${error.message}`);
        }
    }



    return (
        <>
            <br />
            <br />
            <br />
            <div className='display-5 text-center mb-5'>Product</div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={`../uploads/${item.image}`} alt="Product Image" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2>Vector: {item.name}</h2>
                        <p>Category: {item.category}</p>
                        <h3 >Price: <span className="d-inlin custom-color">$</span>{item.price}</h3>
                        <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product