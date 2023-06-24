import React, { useEffect, useState } from 'react'

function CategoryList() {

    const [categoryList, setCategoryList] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/admin/catagories');
            if (response.ok) {
                const json = await response.json();
                let Data = json.result.result;
                setCategoryList(Data)
                console.log("Data:fetch:", Data);

            } else {
                console.log("error");

            }
        } catch (error) {
            console.log("error:", error);
        }
    }
    useEffect(() => {
        fetchData();
        console.log("useEffect: ", categoryList);
    }, []);
























    console.log("categoryList:", categoryList);
    return (

        <>
            <table className="table">
                <tbody>
                    {categoryList.map((value, index) => {
                        return <tr>
                            <td>
                                <label htmlFor="firstName">Category Name</label>
                                <input type="text" className="form-control" id="firstName" placeholder={`${value.categoryName}`} />
                            </td>
                            <td>
                                <label htmlFor="lastName">Image</label>
                                <input type="text" className="form-control" id="lastName" placeholder={`${value.image}`} />
                            </td>
                            <td>
                                <label htmlFor="email">Parent</label>
                                <input type="email" className="form-control" id="email" placeholder={`${value.parent}`} />
                            </td>
                            <td>
                                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                            </td>

                        </tr>

                    })}

                </tbody>
            </table>


        </>
    )
}

export default CategoryList