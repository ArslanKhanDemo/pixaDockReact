import React from 'react'

function Blog() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="row-md-6">
                        <img src="../uploads/1686923386747-108762333.jpg" alt="Blog Image" className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                        <h2>Blog Title</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed feugiat risus ut tortor
                            cursus, in efficitur est venenatis. Vestibulum ante ipsum primis in faucibus orci luctus
                            et ultrices posuere cubilia Curae; Nulla lacinia efficitur massa, eget consectetur quam
                            scelerisque eget.
                        </p>
                        <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog