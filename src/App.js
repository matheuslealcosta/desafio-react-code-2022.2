import './App.css';
import Main from './componets/Main';
import {Routes , Route } from 'react-router-dom'
import Membros from './componets/Membros'
import  Navbar  from './componets/Navbar'
import Login from './componets/Login'
import Footer from './componets/Footer'
import Adm from './componets/Adm'

function App() {
  return (
    <>
    <Navbar />
    <div className='conteiner'>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/membros' element={<Membros />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Adimin' element={<Adm />} />
      </Routes>
    </div>
    <Footer />
    </>


  );
}

export default App;
