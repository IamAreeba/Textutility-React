
// import React from 'react'
import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {



    /*
      Making Functions
        

    */
    const handleUpClick = () => {
        // console.log("UpperCase was clicked " + text )
        let newText = text.toUpperCase();
        // setText("Yoy have clicked on handleUpClick")
        setText(newText)

        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)

        
        props.showAlert("Converted to lowercase!", "success")
    }

    const handleOnChange = (event) => {
        // console.log("handleOnChange was clicked")
        setText(event.target.value)
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text is cleared", "success")
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges()
        props.showAlert("Text is copied", "success")
    }

    const handleSpeakClick = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);

    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))

        props.showAlert("Extra spaces removes", "success")
    }


    /*
    Using useState a hook
    Array Destructing

    text = "new text" ;    // Wrong way to change the state
    setText("new text");  // correct way to change the state

    */
    const [text, setText] = useState("")

    return (
        <>
            <div className='container' style={{color: props.mode === 'dark'? 'white' : '#042743'}}>
                {/* <h1> {props.heading} - {text} </h1> */}
                <h1 className='mb-3'> {props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control"
                        style={
                            {backgroundColor: props.mode === 'dark'? '#dde9dd' : 'white' ,
                             color: props.mode === 'dark' ? 'black' : 'black'}
                            } 
                        onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
                </div>
 
                {/* Buttons */}
                    <button disabled={text.length === 0} type="button" className="btn btn-primary" onClick={handleUpClick} >Convert To UpperCase</button>
                    <button disabled={text.length === 0} type="button" className="btn btn-primary mx-3 my-1" onClick={handleLoClick} >Convert To LowerCase</button>
                    <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear</button>
                    <button disabled={text.length === 0} type="button" className="btn btn-primary mx-3 my-1" onClick={handleSpeakClick} >Speak</button>
                    <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy</button>
                    <button disabled={text.length === 0} type="button" className="btn btn-primary mx-3 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>


            </div>

            <div className="container my-3" style={{color: props.mode === 'dark'? 'white' : '#042743'}} >
                <h1>YourText Summary</h1>
                {/* <p>{(text.split(" ").length) -1} Words and {text.length} Chracters</p> */}
                <p> {text.split(" ").filter((element) => {return element.length !== 0}).length}  Words and {text.length} Chracters </p>
                <p>{0.008 * (text.split(" ").filter((element) => {return element.length !== 0}).length)} Minutes read </p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text: "Nothing to preview"}</p>
            </div>
            
        </>
    )
}



TextForm.propTypes = {
    heading: PropTypes.string
}

// TextForm.PropTypes = {
//     heading: PropTypes.string.isRequired
// }

TextForm.defaultProps = {
    heading: "Set Heading .."
}