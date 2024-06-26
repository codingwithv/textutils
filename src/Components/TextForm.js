import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upper case Clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick =()=>{
        let newText = '';
        setText(newText);
    }
    const handleOnCahnge = (event)=> {
        // console.log("On Change"); 
        setText(event.target.value);
     }
    const [text, setText] = useState('');
    // text = "hdcj" // wrong way to change the text
    // setText("dxvhx") // correct way to change the text
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnCahnge} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Covert to UpperCase</button>
            <button className='btn btn-primary mx-2' onClick={handleLowClick}>Covert to LowerCase</button>
            <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear the text</button>
        </div>
        <div className="container my=3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length-1} Words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
