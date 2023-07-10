import React, { useEffect, useState } from 'react';

function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/catagories');
      if (response.ok) {
        const json = await response.json();
        let Data = json.result.result;
        setCategoryList(Data);
        console.log("Data:fetch:", Data);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  let handleClick = (a) => {
    console.log("Clicked", a);
  };

  return (
    <>
      <table className="table">
        <tbody>
          {categoryList.map((value, index) => (
            <tr key={index}>
              <td>
                <label htmlFor="Category">Category Name</label>
                <input type="text" className="form-control" id="Category" placeholder={`${value.categoryName}`} />
              </td>
              <td>
                <label htmlFor="Image">Image</label>
                <input type="text" className="form-control" id="Image" placeholder={`${value.image}`} />
              </td>
              <td>
                <label htmlFor="Parent">Parent</label>
                <input type="text" className="form-control" id="Parent" placeholder={`${value.parent}`} />
              </td>
              <td>
                <button onClick={() => handleClick(value.parent)} className="btn btn-primary mt-3">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CategoryList;
