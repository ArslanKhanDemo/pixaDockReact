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
                    let Data = json.result.result;
                    //console.log(Data);
                    //console.log(json.result.result.length);
                    setData(Data); // Update data with the array value
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

    // if (isLoading) {
    // props.showAlert("warning", "Loading", "Please wait...");
    // }
    // if (error) {
    //     <div>Error: {error}</div>;
    // }

    return (
        <div>
          {data.map((item, index) => (
            <div className="container" key={index}>
              <div className="row">
                <div className="col-md-10">
                  <div className="card">
                    <div className="card bg-success">
                      <div className="card-body">
                        <h1 className="card-title">{item.heading}</h1>
                        <p className="card-text">{item.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
};

export default MyComponent;
