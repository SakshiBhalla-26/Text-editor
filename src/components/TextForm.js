import React,{useState} from 'react'


export default function TextForm(props) {

  const handleUpClick=()=>{
    //console.log("Upper case clicked "+ text);
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handleOnChange=(event)=>{
    setText(event.target.value);
  }

  const handleSpeech=()=>{
    let msg=new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toggle=document.getElementById('toggle');
    if(toggle.textContent==="Speak"){
      toggle.innerHTML="Stop";
    }else{
      toggle.innerHTML="Speak";
      if(toggle.innerHTML==="Speak"){
        window.speechSynthesis.cancel();
      }
    }
  }

  const replaceWord=()=>{
    let fword=prompt("Enter which word to replace : ");
    let rword=prompt("Enter new word : ");
    setText(text.replaceAll(fword,rword));
  }

  const [text,setText]=useState('');

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'#333',color:props.mode==='light'?'black':'white'}}onChange={handleOnChange} id="myTextBox" rows="7"></textarea>
      </div>
      <button className="btn btn-primary my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleSpeech} id="toggle">Speak</button>
      <button className="btn btn-primary mx-2 my-1" onClick={replaceWord}>Replace Any word</button>
      
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.replace(/\n/g,' ').split(' ').filter(text=>text!=="").length} words and {text.trim().length} characters</p>
      <p>{0.008 * text.replace(/\n/g,' ').split(' ').filter(text=>text!=="").length} Minutes read</p>
    </div>

    </>
  )
}
