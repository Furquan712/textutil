import React from 'react'
import { useState } from 'react'

function Textform(props) {

    const HandleUpClick =() =>{
        let newText= text.toUpperCase();
        setText=newText
    }
    const HandleLowClick =() =>{
        let newText= text.toLowerCase();
        setText=newText
    }
     
    const HandleOnChange=(event) =>{
        setText(event.target.value)
    }

    const [text,setText]=useState("");
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={HandleOnChange}  rows="3"></textarea>
        </div>
        <button type="button" class="btn btn-primary mx-2" onClick={HandleUpClick}>Convert to Uppercase</button>
        <button type="button" class="btn btn-primary mx-2" onClick={HandleLowClick}>Convert to Lowercase</button>
    </div>

    <div className="container my-3">
        <h3>Your Text Summary here</h3>
        <p>{text.split(" ").length} words & {text.length}characters</p>
        <p>{ 0.008 * text.split(" ").length}Mintes to read</p>
        <h4>Preview</h4>
        <h6>{text}</h6>

    </div>
    </>

  )
}

export default Textform