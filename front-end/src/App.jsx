import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Signup/Signup";
import PasswordRecovery from "./pages/PasswordRecovery/PasswordRecovery";
import Error from "./pages/Error/Error";
import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer";

function App() {
  return ( <BrowserRouter>
  <Header/>
  <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/Signup" element={<Signup />} />
  <Route path="/Home" element={<Home />} />
  <Route path="/Profile" element={<Profile />} />
  <Route path="/Login"  element={<Login />} />
  <Route path="/Password-recovery" element={<PasswordRecovery/>} />
  <Route path="*" element={<Error />} />
  </Routes>
  </BrowserRouter>
  
    
  )
}

export default App