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
            <br />
            <br />
            <div>
                {data.map((item, index) => (
                    <>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="card mb-4">
                                        <img src={`../uploads/${item.image}`} alt="Blog Image 1" className="img-fluid card-img-top blog-image" />
                                        <div className="card-body">
                                            <h5 className="card-title" key={index}>{item.heading}</h5>
                                            <p className="card-text"key={index}>{item.content}</p>
                                            <a href="C:\Users\DELL\Desktop\HomeLogo" className="btn btn-primary">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
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