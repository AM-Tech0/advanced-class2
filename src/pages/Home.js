import React from 'react'
import Header from '../component/Header';
import Blog from '../component/Blog';
import Footer from '../component/Footer';
const Home = () => {
  return (
    <div>
      <div className="h-full w-full gap-y-1 flex flex-col justify-center items-center ">
      <Header />
      <Blog />
       <Footer />
    </div>
    </div>
  )
}

export default Home;
