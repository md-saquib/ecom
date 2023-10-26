import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './router/header/Header';
import Home from './router/navOption/Home';
import About from './router/navOption/About';
import Profile from './router/navOption/profile/Profile';
import Contact from './router/navOption/Contact';
import Login from './router/navOption/Login/Login';
import SignIn from './router/navOption/Login/SignIn';
import RequireLogin from './router/hoc/RequireLogin';
// import  { userInfo } from './router/authContext/AuthContext';
// import { useContext } from 'react';

function App() {
  // const login = useContext(userInfo);
  // console.log(login);
  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<RequireLogin><Profile /></RequireLogin>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='*' element={<h1>Invalid ! Search</h1>} />
      </Routes>



    </>
  );
}

export default App;
