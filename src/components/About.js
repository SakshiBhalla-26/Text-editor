import React from 'react'

export default function About(props) {

  let myStyle={
    color:props.mode==='dark'?'white':'#333',
    backgroundColor:props.mode==='dark'?'#333':'white'
  }

  let bstyle={
    color:props.mode==='light'?'black':'#00CCFF',
    backgroundColor:props.mode==='light'?'white':'#333'}

  return (
<div className='container'>
    <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={bstyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <b><i>Analyse your text</i></b>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils gives you a way to analyse your text quickly and efficiently.Be it word count,character count,etc.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={bstyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <b><i>Free to use</i></b>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text.TextUtils reports the number of words and characters i.e. suitable for writing content with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={bstyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <b><i>Browser compatible</i></b>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This word counter software works in any web browser such as Chrome,Firefox,Internet explorer,Safari.It suits to count and edit characters in facebook,blog,books,excel document,pdf,essays,etc.
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
