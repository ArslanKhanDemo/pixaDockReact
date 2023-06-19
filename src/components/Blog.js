import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Blog(props) {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/blog/${id}`);
        if (response.ok) {
          const json = await response.json();
          const data = json.result.result;
          setItem(data);
          setIsLoading(false);
        } else {
            setError(response.ok);
            props.setAlert('danger', 'ALERT:', `${error}`);
        }
    } catch (error) {
        setError('Error retrieving data');
    } finally {
        setIsLoading(false);
        props.setAlert(null);
    }
};

fetchData();
}, [id, error, props]);

if (isLoading) {
      props.showAlert('warning', 'ALERT:', 'Loading...');
  }

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="row-md-6">
            <img src={`../uploads/${item.image}`} alt="Blog Image" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="display-4 userName">{item.heading}</h2>
            <p>{item.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
