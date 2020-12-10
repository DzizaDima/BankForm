import React, { useState } from 'react';
import './App.css'

function App() {
  const [email, setEmail] = useState('');
  const [colorBorder, setColorBorder] = useState();
  const [colorDesc, setColorDesc] = useState();
  /*  const [colorBorder, setColorBorder] = useState(); */
  const [password, setPassword] = useState('');
  const [colorBorderPass, setColorBorderPass] = useState();
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const PASS_REGEXP = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}$/;//минимум одна заглавная, одна цифра,  8+ символов
  var inputValid = {
    borderColor: "green",
  }
  var inputInvalid = {
    borderColor: "red",
  }
  var emailDescValid = {
    color: "transparent",
  }
  var emailDescInvalid = {
    color: "red",
  }

  function validate(value, reg) {
    return reg.test(value);
  }
  
  function updateInput() {
    if (validate(email, EMAIL_REGEXP)) {
      setColorBorder(inputValid);
      setColorDesc(emailDescValid);
    }
    else {
      setColorBorder(inputInvalid);
      setColorDesc(emailDescInvalid)
    }
  }
  function updateInputPass() {
    if (validate(password, PASS_REGEXP)) {
      setColorBorderPass(inputValid)
    }
    else {
      setColorBorderPass(inputInvalid)
    }
  }
  return (
    <div className="App">
      <a href="#" className="logo-link">
        <h1 className="logo-link__main">Bank</h1>
        <h3 className="logo-link__sup">Support Portal</h3>
      </a>
      <form action="" className="form">
        <div className="emailInp inp">
          <div className="inp__box">
            <i className="fas fa-user" aria-hidden="true"></i>
            <input type="email" className="email"
              placeholder="E-mail" onChange={e => setEmail(e.target.value)}
              onBlur={updateInput} style={colorBorder} />
            <div className="inp__box__sign">
              {validate(email, EMAIL_REGEXP)
                ? <i className="fas fa-check"></i>
                : <i className="fas fa-times"></i>
              }
            </div>
          </div>
          <p className="inp__desc" style={colorDesc}>Invalid Email</p>
        </div>
        <div className="passInp inp">
          <div className="inp__box">
            <i className="fas fa-lock" aria-hidden="true"></i>
            <input type="password" className="password" placeholder="Password"
              onChange={e => setPassword(e.target.value)} onBlur={updateInputPass} style={colorBorderPass}/>
            <div className="inp__box__sign">
            {validate(password, PASS_REGEXP)
                ? <i className="fas fa-check"></i>
                : <i className="fas fa-times"></i>
              }
            </div>
          </div>
         
        </div>
        <button type="submit" className="btn-log">Login</button>
        <p className="fogot">Fogot your password? <a href="#" className="fogot__link">Reset it here</a></p>
      </form>
    </div>
  );
}

export default App;
