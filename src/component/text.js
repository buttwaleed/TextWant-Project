import React, {useState} from 'react'


export default function Navb(props) {
 const handleclick=()=>{
   console.log("You clicked"+ text);
  let newtext = text.replace(/\.\s+([a-z])[^\.]|^(\s*[a-z])[^\.]/g, s => s.replace(/([a-z])/,s => s.toUpperCase()))
   settext(newtext);
   props.showalert("Text is converted!","sucesss")
  }
  const handleup=()=>{
    console.log("You clicked"+ text);
   let newtext = text.toUpperCase();
   settext(newtext);
   props.showalert("Text is converted!","sucesss")
  }
  const handleclear=()=>{
    console.log("text clear");
   let newtext = '';
   settext(newtext);
   props.showalert("Text is cleared!","sucesss")
  }
  const handleExtra = () =>{
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
    props.showalert("Extra space is removed!","sucesss")
  }
  const handlecopy = () =>{
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showalert("Text is copied!","sucesss");
  }
  const handlelo=()=>{
    console.log("You clicked"+ text);
    let newtext = text.toLowerCase();
   settext(newtext);
   props.showalert("Text is converted!","sucesss");
  }
  const handlechange=(event)=>{
    console.log("onchange");
    settext(event.target.value)
  }
  const [text, settext] = useState('');
  return (
    <>
     <h1  style={{color:props.mode=='light'?'black':'white'}} className='my-4 mx-4 ' id='h1head'>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handlechange} style={{ backgroundColor:props.mode=='light'?'white':'#1b1b1b ',color:props.mode=='light'?'black':'white'}}></textarea>
    </div>
    <button disabled={text.length==0} className="btn btn-primary mx-2 my-1"  onClick={handleclick}>Convert to Sentencecase</button>
    <button disabled={text.length==0} className="btn btn-primary mx-2 my-1" onClick={handleup}>Convert to Uppercase</button>
    <button disabled={text.length==0} className="btn btn-primary mx-2 my-1" onClick={handlelo}>Convert to Lowercase</button>
    <button disabled={text.length==0} className="btn btn-primary mx-2 my-1" onClick={handlecopy}>Copy text</button>
    <button disabled={text.length==0} className="btn btn-primary mx-2 my-1" onClick={handleExtra}>Remove Extra space</button>
    <button disabled={text.length==0} className="btn btn-primary mx-2 my-1" onClick={handleclear}>Clear text</button>
   <div className="container my-3"  style={{color:props.mode=='light'?'black':'white'}}>
   <h2>{props.ho}</h2>
   <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length}Words {text.length}Characters</p>
   <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length}Minutes read</p>
   <h2>Preview:</h2>
    <p>{text}</p>
   </div>
   </>

  )
}
