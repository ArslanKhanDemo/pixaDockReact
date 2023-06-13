import React, { useEffect, useState } from 'react';

const MyComponent = (props) => {
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
        return props.showAlert("warning", "Loading", "Please wait...");;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {data.map((item, index) => (
                <>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="card">
                                    <div className="card bg-success">
                                        <div className="card-body">
                                            <h1 className="card-title" key={index}>{item.heading}</h1>
                                            <p className="card-text" key={index}>{item.content}</p>
                                            <button className="btn btn-primary">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <h1 className="display-1" key={index}>{item._id}</h1>
                    <h1 className="display-2" key={index}>{item.heading}</h1>
                    <h1 className="display-3" key={index}>{item.image}</h1>
                    <h1 className="display-4" key={index}>{item.content}</h1> */}
                    <br />
                </>
            ))}
        </div>
    );
};

export default MyComponent;
