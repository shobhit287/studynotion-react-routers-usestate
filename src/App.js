import img from './img/img.png';
import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import { NavLink } from 'react-router-dom';
import {Route,Routes} from 'react-router-dom';

function App() {
  const [authenticate,changeauthenticate]=useState(false);
  function changeHandler(){
    toast.success("Logout Success");
    changeauthenticate(false);
  }
  return (
    <div className="App">
     <div className='main_body'>
      <navbar>
        <NavLink to='/'><img src={img} alt='logo'></img></NavLink>
        <div className='mid_nav'>
          <NavLink  className='nav_class' to='/'>Home</NavLink>
          <NavLink  className='nav_class' to='/about'>About</NavLink>
          <NavLink  className='nav_class' to='/contact'>Contact</NavLink>
        </div> 
        {authenticate===false ?(
        <div className='right_nav'>
          <NavLink className='nav_class'  to='/login'><button>Login</button></NavLink>
          <NavLink  className='nav_class' to='/signup'><button>Signup</button></NavLink>
        </div>):(
        <div className='right_nav'>
        <NavLink className='nav_class'  to='/' onClick={changeHandler}><button>Logout</button></NavLink>
      </div>)}
      </navbar> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login authenticate={authenticate} changeauthenticate={changeauthenticate}/>}/>
        <Route path='/signup' element={<Signup authenticate={authenticate} changeauthenticate={changeauthenticate}/>}/>
      </Routes>
     </div>
    </div>
  );
}

export default App;
