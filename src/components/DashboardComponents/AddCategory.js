import React, { useState, useEffect } from 'react';
function AddCategory() {
  const [image, setImage] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [parent, setParent] = useState('');
  const [parentOption, setParentOption] = useState([]);

  const TOKEN = window.localStorage.token;

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };



  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/catagories');
      if (response.ok) {
        const json = await response.json();
        let Data = json.result.result;
        
        setParentOption(Data);
        
      } else {
        console.log("error");
        //setError('Error retrieving data');
      }
    } catch (error) {
      console.log("error:",error);
      //setError('Error retrieving data');
    }
  }



  useEffect(() => {
    fetchData();
  }, []);


  console.log(parentOption);







  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('categoryName', categoryName.toLowerCase());
    formData.append('parent', parent);

    try {
      const response = await fetch('http://localhost:5000/api/admin/addcategories', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + TOKEN,
        },
        body: formData,
      });

      if (response.ok) {
        const json = await response.json();
        let Data = json.result.result;
        fetchData();
        console.log(Data);
        alert(Data);
      } else {
        let errorResponse = await response.json();
        console.log(errorResponse);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };
















  return (
    <>
      <div className="display-1">AddCategory</div>
      <form className='col' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control-file"
            id="image"
            name="image"
            onChange={handleImageChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="parent" className="form-label">
            Parent
          </label>
          <select
            className="form-control"
            id="parent"
            name="parent"
            value={parent}
            onChange={(e) => setParent(e.target.value)}
          >
            <option value="">Select Parent</option>
            {parentOption.map((item, index) => (
              <option key={index} value={item.categoryName}>{`${item.categoryName}`}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default AddCategory;
