import React from 'react';
import './App.css';
import Header from './component/Header';
import Blog from './component/Blog';
import Footer from './component/Footer';
function App() {
  return (
    <div className="h-full w-full gap-y-1 flex flex-col justify-center items-center ">
      <Header />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

    
