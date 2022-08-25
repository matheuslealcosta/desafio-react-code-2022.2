import './App.css';
import Main from './componets/Main';
import {Routes , Route } from 'react-router-dom'
import Contato from './componets/Contato/'
import Quemsomos from './componets/Quemsomos'
import  Navbar  from './componets/Navbar'
import Login from './componets/Login'

function App() {
  return (
    <>
    <Navbar />
    <div className='conteiner'>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/quem-somos' element={<Quemsomos />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </div>
    </>


  );
}

export default App;
