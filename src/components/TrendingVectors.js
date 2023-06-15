import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"

function TrendingVectors(props) {
    const [data, setData] = useState([]); // Initialize as an empty array
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/admin/catagories');
                if (response.ok) {
                    const json = await response.json();
                    console.log(json.result.result.length);
                    setData(json.result.result); // Update data with the array value
                    //console.log(`../../../../../Desktop/Projects/PixDock/src/uploads/${json.result.result[0].image}`)
                } else {
                    setError('Error retrieving data');
                }
            } catch (error) {
                setError('Error retrieving data');
            } finally {
                setIsLoading(false);
                props.setAlert(null);
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return props.showAlert("warning", "Loading", "Please wait...") && <div>Error: {error}</div>;;
    }
    if (error) {
        return props.showAlert("danger", "Error", `${error}`) && <div>Error: {error}</div>;
    }

    return (
        <>

            {/* <div className="container-fluid">
                <h2 className="display-2 text-center">TRENDING VECTORS</h2>
                <div className="container-fluid">
                {data.map((item, index) => (
                    <>
                        <div className="container" key={index}>
                            <div className="row" key={index}>
                                <div className="row-md-10" key={index}>
                                    <div className="card mb-4" key={index}>
                                        <div className="card-body" key={index}>
                                            <h5 className="card-title" key={index}>{item._id},{index}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                    </>
                ))}
                </div>
            </div> */}
            <div className="container-fluid">
                <h2 className="display-2 text-center">Treanding Vectors</h2>
                <div className="container-fluid my-5">
                    <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 grid-gutter-width: 2.5rem">
                        {data.map((item, index) => (
                            <div className="container" key={index}>
                                <div className="col" key={index}>
                                    <div className="p-3 border" key={index}>
                                        <Link className="nav-link active" to={`/uniquecategory`} key={index} onClick={()=>{
                                            window.localStorage.category ? window.localStorage.removeItem("category"):console.log("no Category in local");
                                            window.localStorage.setItem("category",item.category);
                                        }}>
                                            <div className="container display-4">{item.name}</div>
                                            <img src={`../uploads/${item.image}`} alt="Blog Image 1" className="img-thumbnail" />
                                        </Link>
                                    </div>
                                    {/* <button className="btn btn-primary">Add to Cart</button> */}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );




















    // return (

    // )
}

export default TrendingVectors