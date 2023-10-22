import './App.css';
import Navbar from './component/New';
import Navb from './component/text';
import About from './component/About/About';
import Alert from './component/Alert.';
import React, { useState } from 'react';


import {
 BrowserRouter,
 Route,
 Routes,
 Link
} from "react-router-dom";
function App() {
  const[mode,setMymode] = useState('light')
  const[alert,setAlert] = useState(null)
  
  const showalert=(message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      setAlert(null);
    },2000);
  }

 

  const togglemode = () => {
    if (mode==='light'){
      setMymode('dark');
      document.body.style.backgroundColor='#0E141E';
      showalert("Dark mode has been enabled","success")
    }
    else{
      setMymode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enabled","success")
    }
   /* setInterval(() => {
      document.title='TextWant is a amazing app'
    }, 2000);
    setInterval(() => {
      document.title='Install TextWant Now'
    }, 1500);*/
  }
  
  return (
    <>
    <BrowserRouter>
  

    <Navbar mode={mode} togglemode={togglemode} />
    <Alert alert={alert}/>
    <div className='container'>
    <Routes>
    <Route  path='/' element={ <Navb heading="Try TextWant - Enter text to analyze below" ho="Your text Summary:" mode={mode} showalert={showalert}/>}/>
   </Routes>
   <Routes>
    <Route  path='/about' element={ <About  mode={mode} togglemode={togglemode} />}/>
   </Routes>
    </div>
    </BrowserRouter>
    
    </>
  );
}
export default App;
