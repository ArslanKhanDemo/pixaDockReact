import React,{useEffect} from 'react'

function Blog() {
    let item = {
       blog_image: window.localStorage.getItem("blog-image"),
       blog_heading: window.localStorage.getItem("blog-heading"),
       blog_content: window.localStorage.getItem("blog-content"),
    }

    // useEffect(async()=>{
    //     let blog = await fetch(`http://localhost:5000/api/blog`);
    // },[]);

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="row-md-6">
                        <img src={`../uploads/${item.blog_image}`} alt="Blog Image" className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                        <h2 className='display-4 userName'>{item.blog_heading}</h2>
                        <p>{item.blog_content}</p>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog