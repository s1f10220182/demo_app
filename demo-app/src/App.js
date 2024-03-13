import React from 'react';
// import ItemList from './itemList';
import Header from './header/Header';
import Main from './main/Main';
import Detail from './func/Detail';
import Footer from './footer/Footer';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/detail' element={<Detail/>}/>
        {/*<Route path='*' element={<Notfound/>}/>*/}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
