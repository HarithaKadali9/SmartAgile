import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'; // Correctly import from react-router-dom
import Login from './components/Login';
import AdminLogin from './components/AdminLogin.js';
import Signup from './components/Signup';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import About from './components/About';
import ForgotPassword from './components/Forgotpassword';
import UserProfile from './components/UserProfile'; 
import Employee from './components/Employee'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/userprofile"  element={<UserProfile />}/>
        <Route path="/employee"  element={<Employee />}/>
        <Route path="/about"  element={<About />}/>
        <Route exact path="/Content"  element={<Content />}/>
        <Route path="/forgotpassword" component={ForgotPassword} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
