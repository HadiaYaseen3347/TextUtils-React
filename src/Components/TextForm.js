import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
   // console.log('UpperCase was clicked: ' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to UpperCase!', 'success');

  }
  const copyHandler = ()=>{
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
     props.showAlert('Text Copied!', 'success');
  }
  const handleLoClick = ()=>{
   // console.log('UpperCase was clicked: ' + text);
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
          <textarea className="form-control" value={text} style={ {backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'#022948ff':'white'}} onChange={handleOnChange} id="myBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower Case</button>
        <button className="btn btn-primary " onClick={handleTitleClick}>Convert to Title Case</button>
        <button className="btn btn-primary mx-1 " onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary " onClick={copyHandler}>Copy Text</button>
      </div>
      <div className="container mp-5" style={ {color: props.mode==='light'?'#022948ff':'white'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text: 'Enter your text in the box above to preview it!'}</p>
      </div>
    </>  
  )
}
