import React, { FormEvent } from 'react';
import { useHistory } from 'react-router';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import logo from '../images/logo.png'
import '../styles/login.scss'

function Login() {
  const history = useHistory()
  const {authData,handlePostData}=useContext(AuthenticationContext);
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')

  useEffect(()=>{
    if (authData?.success) {
      history.push("/menu");
    } //eslint-disable-next-line
  },[authData]) 

  async function handleSendFormData(event:FormEvent) {
    event.preventDefault();
    const formData ={
      username:username,
      password:password
    }
    handlePostData(formData)
  }


  return(
    <div className="login-page container-fluid d-flex flex-column justify-content-center align-items-center">
      <main>
        <div className="form-div bg-white d-flex flex-column align-items-center gap-2 p-3">
          <img src={logo} alt="Vagalume logo"/>
          <form onSubmit={handleSendFormData} >
            <label htmlFor="username" className="form-label align-self-start">Username:</label>
            <input type="text" name="username" className="form-control " onChange={(event)=>{setUsername(event.target.value);}}/>
            <label htmlFor="password" className="form-label align-self-start">Password:</label>
            <input type="password" name="password" className="form-control" onChange={(event)=>{setPassword(event.target.value);}}/>
            <button className="btn btn-primary w-50 mt-3" type="submit">
              Entrar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;