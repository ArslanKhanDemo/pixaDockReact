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
                    let Data = json.result.result;
                    //console.log(Data.length);
                    setData(Data); // Update data with the array value
                    ////console.log(`../../../../../Desktop/Projects/PixDock/src/uploads/${json.result.result[0].image}`)
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
        //props.showAlert("warning", "Loading", "Please wait...");
    }
    if (error) {
        return props.showAlert("danger", "Error", `${error}`) && <div>Error: {error}</div>;
    }

    return (
        <>


            <div className="container-fluid">
                <h2 className="display-2 text-center">Vectors Categories</h2>
                <div className="container-fluid my-5">
                    <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 grid-gutter-width: 2.5rem">
                        {data.map((item, index) => (
                            <div className="container" key={index}>
                                <div className="col" key={index}>
                                    <div className="p-3 border" key={index}>
                                        <Link className="nav-link active" to={`/uniquecategory`} key={index} onClick={() => {
                                            window.localStorage.setItem("category", item.category);
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