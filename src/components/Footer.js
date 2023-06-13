import React from 'react'
import PropTypes from 'prop-types'


export default function Footer(props) {
    return (
        <footer className="bg-light py-3 mt-auto">
            
            <div className="container-fluid text-center p-3 bg-secondary-subtle" >
                <div className="row">
                    <div className="container-fluid text-center">
                        <h4 className="display-4">PixaDock</h4>
                    </div>
                    <div className="col">
                        <footer className="footer">
                            <div className="container" >
                                <span className="text">© 2023 PixaDock. All rights reserved.</span>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </footer>
    )
}


Footer.protoType = {
    title: PropTypes.string,
    placeHolder: PropTypes.string
}

Footer.defaultProps = {
    title: "dogHealth",
    placeHolder: "defalt Search.."
}


























{/* */ }