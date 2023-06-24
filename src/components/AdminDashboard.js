import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddCategory from './DashboardComponents/AddCategory';
import AddProduct from './DashboardComponents/AddProduct';
import DeleteCategory from './DashboardComponents/DeleteCategory';
import CategoryList from './DashboardComponents/CategoryList';



function AdminDashboard() {
  const [ActiveComponent, setActiveComponent] = useState(undefined);

  const addComponent = (component) => {
    setActiveComponent(component);
    //console.log(ActiveComponent);
  };

  return (
    <>
      <div className='display-3 text-center'>AdminDashboard</div>
      <div className='row p-5'>
        <div className='col-2 border'>
          <button className='btn btn-parent dropdown-toggle fs-3' data-bs-toggle='dropdown' aria-expanded='false'>
            Product
          </button>
          <ul className='dropdown-menu dropdown-menu-parent'>




            <li>
              <Link className='dropdown-item' onClick={() => addComponent("AddCategory")}>
                Add Categories
              </Link>
            </li>
            <li>
              <Link className='dropdown-item' onClick={() => addComponent("DeleteCategory")}>
                Delete Categories
              </Link>
            </li>
            <li>
              <Link className='dropdown-item' onClick={() => addComponent("CategoryList")}>
                Category List
              </Link>
            </li>
            <li>
              <Link className='dropdown-item' onClick={() => addComponent("AddProduct")}>
                Add Product
              </Link>
            </li>
            <li>
              <Link className='dropdown-item' to='#'>
                Update Product
              </Link>
            </li>
          </ul>
          <br />
          <button className='btn btn-parent dropdown-toggle fs-3' data-bs-toggle='dropdown' aria-expanded='false'>
            User
          </button>
          <ul className='dropdown-menu dropdown-menu-parent'>
            <li>
              <Link className='dropdown-item' onClick={() => addComponent("AddCategory")}>
                Add Categories
              </Link>
            </li>
            <li>
              <Link className='dropdown-item' onClick={() => addComponent("AddProduct")}>
                Add Product
              </Link>
            </li>
            <li>
              <Link className='dropdown-item' to='#'>
                Update Product
              </Link>
            </li>




          </ul>
          <br />
        </div>
        <div className='col border'>
          <div className='container' id='val'>
            {ActiveComponent === "AddCategory" && <AddCategory />}
            {ActiveComponent === "AddProduct" && <AddProduct />}
            {ActiveComponent === "DeleteCategory" && <DeleteCategory />}
            {ActiveComponent === "CategoryList" && <CategoryList />}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
