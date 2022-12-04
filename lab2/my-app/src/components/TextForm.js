import React,{useState} from 'react'

export default function TextForm(props) {

    const handleOnChange= (event) =>{
        setText(event.target.value);
    }

    const handleUpClick= () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const [text, setText] = useState('Enter the text');

  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="form mb-3" >
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="15"></textarea>
        </div>
        <div className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</div>
    </div>
  )
}
