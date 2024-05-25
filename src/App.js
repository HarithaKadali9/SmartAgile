import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'; // Correctly import from react-router-dom
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'; // Import your UserProfile component
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/userprofile"  element={<UserProfile />}/>
        <Route exact path="/Content"  element={<Content />}/>
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
