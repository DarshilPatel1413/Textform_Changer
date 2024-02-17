
import { useState } from 'react';
import Navbar from './Mycomponents/Navbar';
import TextForm from './Mycomponents/TextForm';
import Alert from './Mycomponents/Alert';

function App() {

  const [alert , setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <Navbar title="TextFormChanger" about="About"/>
    <Alert alert={alert}/>
    <div className="container my-3 ">
    <TextForm showAlert={showAlert} heading="Write Text  Below For Changes"/>
    </div>
    </>

  );
}

export default App;
