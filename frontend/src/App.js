import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import User from './components/User';
import Manufacturer from './components/Manufacturer';


function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/user' element={<User />} />
        <Route exact path='/manufacturer' element={<Manufacturer />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;