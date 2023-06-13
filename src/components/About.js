import React from 'react'
import MyComponent from './MyComponent'
function About(props) {
        return (
            <>
                <div className="container">
                    <h1 className="display-2" >About Page</h1>
                </div>
                <br />
                <MyComponent showAlert={props.showAlert} setAlert={props.setAlert}/>
            </>
        )
    }


export default About