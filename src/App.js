//React
import {Routes, Route, Link, useNavigate} from "react-router-dom"
import Login from './Login';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//CSS
import { Navbar, Container } from "react-bootstrap";
import './App.css';
import styled from "styled-components"
//firebase
import { auth } from './shared/firebase';
import { async } from '@firebase/util';
import { onAuthStateChanged, signOut } from 'firebase/auth';
//components
import TopNav from './components/TopNav';
import TopNav_notLogin from './components/TopNav_notLogin'; 
import Main from './main';
import AddPost from './AddPost';
import Signup from './Signup';


const Welcome = () => {
  return (
    <>
      <div>환영합니다</div>
      <button onClick={()=>{signOut(auth)}}>로그아웃
      </button>
    </>
  ) 
}

function App() {
  const dispatch = useDispatch();

  const [is_login, setIsLogin] = React.useState(false);
  console.log(is_login)
  console.log("currentUser:",auth.currentUser)
  const loginCheck = async (user) => {
    if(user){
      setIsLogin(true);
    }else{
      setIsLogin(false);
    }
  }

  useEffect(()=>{
    onAuthStateChanged(auth, loginCheck)
  }, [])

  return (
    <div className="App">
      {
        is_login?
        (<TopNav></TopNav>)
        : 
        (<TopNav_notLogin/>)
      }
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/main' element={<Main/>}></Route>
        <Route path='/post' element={<AddPost/>}></Route>
        {is_login? 
          (<Route path="/" element={<Welcome/>}/>) 
          :
          (<Route path="/" element={<Login/>}/>)
        }
      </Routes>
      <br/>

      <Link to={'/main'}><button>Go to main</button></Link>
    </div>
  );
}

export default App;
