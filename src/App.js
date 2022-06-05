import logo from './logo.svg';
import './App.css';
import Signup from './Signup';
import {Routes, Route, Link} from "react-router-dom"
import Login from './Login';
import React from 'react';
import { auth } from './shared/firebase';
import { async } from '@firebase/util';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Welcome = () => {
  return (
    <><div>환영합니다</div><button onClick={()=>{signOut(auth)}}>로그아웃</button></>
  ) 
}
function App() {
  const [is_login, setIsLogin] = React.useState(false);
  console.log(is_login)
  const loginCheck = async (user) => {
    if(user){
      setIsLogin(true);
    }else{
      setIsLogin(false);
    }
  }
  React.useEffect(()=>{
    onAuthStateChanged(auth, loginCheck)
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        {is_login? 
          (<Route path="/" element={<Welcome/>}/>) 
          :
          (<Route path="/" element={<Login/>}/>)
        }
      </Routes>
    </div>
  );
}

export default App;
