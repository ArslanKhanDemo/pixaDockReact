import React, { useEffect, useState } from 'react';
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

    return (
        <>
            <div className="container fullscreen mb-5">
                <h1 className="display-1">Blogs</h1>
            </div>

            <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 grid-gutter-width: 1.5rem">
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
                        <div class="container " >
                            <div>
                                <div class="col">
                                    <div class="p-3 border">
                                        <img src={`../uploads/${item.image}`} alt="Blog Image 1" className="img-thumbnail" />
                                        <h5 className="card-title" key={index}>{item.heading}</h5>
                                        <textarea name="" id="" cols="auto" rows="auto">{item.content}</textarea>
                                    </div>
                                    {/* <button className="btn btn-primary">Add to Cart</button> */}
                                </div>
                            </div>
                        </div>
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