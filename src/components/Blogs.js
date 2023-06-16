import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"

//import myImage from '../uploads/';
//import React, { useEffect, useState } from '';

function Blogs(props) {

    const [data, setData] = useState([]); // Initialize as an empty array
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/blog');
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
        return props.showAlert("warning", "Loading", "Please wait...");
    }
    if (error) {
        return props.showAlert("danger", "Error", `${error}`) && <div>Error: {error}</div>;
    }
    console.log(data[2].image);
    return (
        <>
            <div className="container fullscreen mb-5">
                <h1 className="display-1">Blogs</h1>
            </div>

            <div className='fixed-size-for-div'>
            <div class="row row-cols-1 row-cols-lg-3 g-2 g-lg-4 grid-gutter-width: 1.5rem">
                {data.map((item, index) => (
                    <>
                        {/* <div className="container">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="card mb-7">
                                        <div className="card-body">
                                            <img src={`../uploads/${item.image}`} alt="Blog Image 1" class="img-thumbnail max-width: 20% " />
                                            <h5 className="card-title" key={index}>{item.heading}</h5>
                                            <p className="card-text"key={index}>{item.content}</p>
                                            <a href="C:\Users\DELL\Desktop\HomeLogo" className="btn btn-primary">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /> */}
                        <Link className="nav-link active" to={`/blog`} key={index} onClick={() => {
                            if (window.localStorage.getItem("blog-image") || window.localStorage.getItem("blog-heading") || window.localStorage.getItem("blog-content")) {
                                window.localStorage.removeItem("blog-image")
                                window.localStorage.removeItem("blog-heading")
                                window.localStorage.removeItem("blog-content")
                            }
                            window.localStorage.setItem("blog-image", item.image)
                            window.localStorage.setItem("blog-heading", item.heading)
                            window.localStorage.setItem("blog-content", item.content)
                        }}>
                            <div class="container " >
                                <div>
                                    <div class="col">
                                        <div class="p-3 border">
                                            <img src={`../uploads/${item.image}`} alt="Blog Image 1" className="fixed-size" />
                                            <h5 className="card-title" key={index}>{item.heading}</h5>
                                        </div>
                                        {/* <button className="btn btn-primary">Add to Cart</button> */}
                                    </div>
                                </div>
                            </div>
                        </Link>
                        {/* <div className="card">
                                <div className="card-body">
                                    <img src={`../uploads/${item.image}`} className="card-img-top width-50px" alt="Image Alt Text"/>
                                    <h5 className="card-title">{item.heading}</h5>
                                    <p className="card-text">Card content goes here.</p>
                                </div>
                        </div> */}

                    </>
                ))}
            </div>
            </div>
        </>
    );





    // return (
    //     <>
    //         <div className="container fullscreen mt-5">
    //             <h1 className="display-1 text-center">Blogs</h1>
    //         </div>
    //     </>
    // )
}


export default Blogs