import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

function UniqueCategory() {

    const [Data, setData] = useState([]);
    const [link, setLink] = useState(window.localStorage.getItem("category"));

    useEffect(() => {
        async function unique() {
            //console.log("From unique window.localStorage.getItem('category'):", window.localStorage.getItem("category"));
            try {
                const response = await fetch(`http://localhost:5000/api/category/${link}`);

                if (response.ok) {
                    let data = await response.json();
                    //console.log("data veriable in unique:", data.result.result);
                    setData(data.result.result);
                } else {
                    let data = await response.json();
                    //console.log("data veriable in unique else:", data);
                }
            } catch (error) {
                console.error("Error: ", error);
            }
        }

        unique();
    }, []);













    return (
        <>
            <div className="container-fluid">
                <h2 className="display-2 text-center mb-5 mt-5">{link}</h2>
                <div className="container-fluid my-1 fixed-size-for-div">
                    <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3 grid-gutter-width: 0.5rem">
                        {Data.map((item, index) => (
                            <>

                                <div className="container" key={index}>
                                    <div className="col" >
                                        <div className="p-3 border" >
                                            <Link className="nav-link active" to={`/product/${item._id}`} >
                                                <div className="container display-5">Name: {item.name}</div>
                                                <div className="container display-6 mb-3">Category: {item.category}</div>
                                                <img src={`../uploads/${item.image}`} alt="image" className="img-thumbnail" />
                                            </Link>
                                        </div>
                                        {/* <button className="btn btn-primary">Add to Cart</button> */}
                                    </div>

                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default UniqueCategory




