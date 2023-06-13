import React, { useEffect, useState } from 'react';

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
                <h2 className="display-2 text-center">TRENDING VECTORS</h2>
                <div className="container-fluid">
                    {data.map((item, index) => (
                        <div className="container" key={index}>
                            <div className="row" key={index}>
                                <div className="row-md-10" key={index}>
                                    <div className="card mb-4" key={index}>
                                        <div className="card-body" key={index}>
                                            <h5 className="card-title" key={index}>{item._id}, {index}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );




















    // return (

    // )
}

export default TrendingVectors