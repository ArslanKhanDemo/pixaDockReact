import React, { useState } from 'react'
//import Alert from './Alert'

export default function TextArea(props) {



    const [text, setText] = useState("Please Enter You Text Here...")
    const [mode, setMode] = useState(true)
    //let boool;


    let convert = () => {
        //boool = true
        if (mode) {
            let updated = text.toUpperCase();
            setText(updated);
            setMode(false)
            props.showAlert("success", "Success", "The phrase is Capetilize");

        } else {

            let updated = text.toLowerCase();
            setText(updated);
            setMode(true);
            props.showAlert("warning", "Success", "The phrase is LoweredCased");


        }

    }

    let convert2 = (event) => {
        console.log("Convert Called");
        setText(event.target.value)
    }




    return (
        <>
        <div className="container">
            <h1 className='display-1'> TEXT EDITOR </h1>
        </div>
            <div className='container'>
                <div className="mb-3">
                    <label htmlFor="examplehtmlFormControlTextarea1" className="htmlForm-label"></label>
                    <textarea className="htmlForm-control" id="examplehtmlFormControlTextarea1" value={text} onChange={convert2} rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={convert} >Convert</button>
                <br />
                <br />
                <br />
                <div className="container">
                    <h1 className='display-5'>Summery Of The Provided text</h1>
                    <br />
                    <p  className='display-6' >Words:{text.split(" ").length} And Characters: {text.length}</p>
                    <br />
                    <p className='display-6' >You can read all this text in approx: {0.008 * text.split(" ").length} mins</p>
                </div>
            </div>
        </>
    )
}
