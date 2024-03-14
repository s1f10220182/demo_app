// import React from 'react';
// // import ItemList from './itemList';
// // import Header from './header/Header';
// import Main from './main/Main';
// import Detail from './func/Detail';
// import Footer from './footer/Footer';
// import Search from './func/Search';
// import { Routes, Route } from "react-router-dom";

import Header from './header/Header';
import Main from './main/Main';
import Detail from './func/Detail';
import Footer from './footer/Footer';
import Search from './func/Search';
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div  className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
