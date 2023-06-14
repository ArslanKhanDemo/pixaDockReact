import React from 'react'

function Alert(props) {



    return (
        <>
            <div className='container'>
                {
                    props.alert && <div className={`alert alert-${props.alert.type} fade-out-alert`} role="alert">
                        <strong>{props.alert.title}</strong> : {props.alert.msg}
                        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                    </div>

                }
            </div>
        </>
    )
}

export default Alert