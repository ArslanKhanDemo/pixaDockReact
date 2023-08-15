import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Blogs(props) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/blog');
                if (response.ok) {
                    const json = await response.json();
                    let respObject = json.result.result;
                    setData(respObject);
                    console.log("json.result.result:", json.result.result.length);
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
        props.showAlert("warning", "Loading", "Please wait...");
    }

    return (
        <>
            <div className="container fullscreen mb-5">
                <h1 className="display-1">Blogs</h1>
            </div>

            <div className='fixed-size-for-div'>
                <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-4 grid-gutter-width: 1.5rem">
                    {data.map((item, index) => (
                        <div key={index}>
                            <Link className="nav-link active" to={`/blog/${item._id}`}  >
                                <div className="container " >
                                    <div>
                                        <div className="col">
                                            <div className="p-3 border">
                                                <img src={`../uploads/${item.image}`} alt="Blog Image 1" className="fixed-size" />
                                                <h5 className="card-title">{item.heading}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {error ? (
                <>
                    {props.showAlert("danger", "Error", `${error}`)}
                    <div>Error: {error}</div>
                </>
            ) : null}
        </>
    );
}

export default Blogs;
