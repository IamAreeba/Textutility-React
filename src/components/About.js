import React, { useState } from 'react'

export default function About(props) {


    const [myStyle, setMyStyle] = useState({
        color: 'black',    // Text Color
        backgroundColor: 'white',
        // border: '4px solid purple'
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if(myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'gray',
                border: '1px solid white'
            })
            setBtnText("Enable Light Mode")
        }

        else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
                
            })
            setBtnText("Enable Dark Mode")
        }
    }

    let myStyle1 = {
        backgroundColor : props.mode === 'dark' ? '#042743' : 'white',
        color : props.mode === 'dark' ? 'white' : 'black'
    }

    let myStyle2 = {
        backgroundColor : props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
        color : props.mode === 'dark' ? 'white' : 'black'
    }


  return (

    <>
        <div className='container my-9' style={myStyle1}>
            <h1 className='my-9'>About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={myStyle2} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle2} >
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle2} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle2}>
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle2} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle2}>
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>
    
        </div>



        {/* <div className="container my-2">
            <button type="button" onClick={toggleStyle} className="btn btn-info my-4">{btnText}</button>
        </div> */}

    </>
  )
}
