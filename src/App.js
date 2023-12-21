
import './App.css';
import React, { useState } from 'react'



import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { type } from '@testing-library/user-event/dist/type';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"



function App() {

  const [mode, setMode] = useState('light');   // Whether Dark mode is enabled or not
  const [alert, setAlert] = useState(null);

const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
}


  const toggleMode = () => {

    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
      // document.title = "TextUtils - Dark Mode"
      setInterval(() => {
        document.title = "TextUtils is Amazing"
      }, 2000);


      setInterval(() => {
        document.title = "Install TextUtils now"
      }, 1500);


    }

    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      // document.title = "TextUtils - Light Mode" 

    }
  }




  return (

    <Router>

    <>
     
      {/* =============== Navbar Component ============= */}
      {/* <Navbar /> */}
      <Navbar Title="TextUtils" Home="Home" About="About" mode={mode} toggleMode={toggleMode} />
      
      {/* ============== Alert Component ============ */}
        {/* <Alert /> */}
        {/* <Alert alert="This is Alert"/> */}
        <Alert alert={alert} />


      <div className="container my-3" >

        {/* ============= TexForm Component ============== */}
          {/* <TextForm /> */}
          {/* <TextForm heading="Enter text to analyze below" mode={mode} /> */}
          {/* <TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode} /> */}


        {/* ============== About Component ============ */}
          {/* <About /> */}

      </div>


      <div className="container">
        <Switch>
          <Route exact path="/about">
            <About mode = {mode} />
          </Route>

          <Route exact path='/'>
            <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Chracter Counter, Remove extra spaces" mode={mode} />
          </Route>

        </Switch>
      </div>
 

    </>
    </Router>
  );
}

export default App;

