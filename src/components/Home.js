import React from 'react'
import TrendingVectors from './TrendingVectors'
function Home(props) {

   
        return (
            <>  
                
                <div className="container-fluid">
                    <h1 className="display-1 text-center">Welcome To PixaDock</h1>
                </div>
                <br />
                <TrendingVectors showAlert={props.showAlert} setAlert={props.setAlert} />
                <br />
            </>
        )
    
}

export default Home