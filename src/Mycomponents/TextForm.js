import React,{useState} from 'react'

export default function TextForm(props) {
    const clickuphandler=()=> {
        console.log("Uppercase btn clicked" + Text)
        let newText = Text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","sucess")
    }
    const clicklohandler=()=> {
        console.log("Uppercase btn clicked" + Text)
        let newText = Text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","sucess")
    }
    const removeextraspaces=()=> {
        let newText = Text.split(/[  ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces","sucess")
    }
    const refresh=()=> {
        let Text = '';
        setText(Text)
        props.showAlert("old text cleared","sucess")
    }
    const copy=()=> {
        var text= document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","sucess")
    }
    const changehandler=(event)=> {
        console.log("onchange ");
        setText(event.target.value)
    }

    const [Text , setText] = useState();


  return (
    <>
        <h1>{props.heading}</h1>
      <div className="mb-3 ">
  <textarea className="form-control" rows="8" onChange={changehandler} id="mybox"  value={Text} placeholder='Enter Text Here'></textarea>
</div>
<div className="btnn ">
<button className="btn btn-primary mx-1 mb-3" onClick={clickuphandler} >Uppercase</button>
<button className="btn btn-primary mx-1 mb-3" onClick={clicklohandler} >Lowercase</button>
<button className="btn btn-primary mx-1 mb-3" onClick={removeextraspaces} >Remove Extra-Spaces</button>
<button className="btn btn-secondary mx-1 mb-3" onClick={refresh} >Clear</button>
<button className="btn btn-secondary mx-1 mb-3" onClick={copy} >Copy-Text</button>
</div>
{/* <div className="my-3" >
    <h2>Text Summary</h2>

   Text.length && <p>{Text.split(" ").length}  words and {Text.length} characters</p>
    <p>Taking {0.010 * Text.split(" ").length} Minutes for read</p>
    <h2>Preview</h2>
    <p>{Text}</p>
</div> */}
    </>
  )
}
