import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
   // console.log('UpperCase was clicked: ' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to UpperCase!', 'success ');

  }
  const copyHandler = ()=>{
    navigator.clipboard.writeText(text);
     props.showAlert('Text Copied!', 'success');
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
     props.showAlert('Converted to LowerCase!', 'success');

  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
     props.showAlert('Cleared!', 'success');

  }

  const handleTitleClick = () => {
    let words = text.split(" ");
    let newText = "";

   words.forEach((word, index) => {
    if (word.length > 0) {
      let titleWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

      // Add a space only if it's not the last word
      if (newText === "") {
        newText = titleWord;
      } else {
        newText += " " + titleWord;
      }
    }

  });

  setText(newText);
   props.showAlert('Converted to TitleCase!', 'success');
};


  const handleOnChange = (event)=>{
   //  console.log('On change');
    setText(event.target.value);
  }
  const [text, setText] = useState('')
  return (
    <>
      <div className='container' style={ {color: props.mode==='light'?'#022948ff':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={ {backgroundColor: props.mode==='light'?'white':'#043e6b', color: props.mode==='light'?'#022948ff':'white'}} onChange={handleOnChange} id="myBox" rows="6"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTitleClick}>Convert to Title Case</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lower Case</button>
        
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={copyHandler}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleClearClick}>Clear Text</button>
        
      </div>
      <div className="container mp-5" style={ {color: props.mode==='light'?'#022948ff':'white'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text: 'Nothing to Preview'}</p>
      </div>
    </>  
  )
}
