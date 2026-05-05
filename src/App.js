import React from 'react';
import './App.css';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import TagePage from './pages/TagePage';
import Category from './pages/Category';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (

    <div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/blog/:blogId' element={<BlogPage/>}></Route>
      <Route path='/tag/:tag' element={<TagePage/>}></Route>
      <Route path='/category/:category' element={<Category/>}></Route>
    </Routes>
    </div>
  );
}

export default App;

    
