import React,{useContext} from 'react'
import Spinner from './Spinner';
import Card from './Card';
import { AppContext } from '../context/AppContext'
const Blog = () => {
    // consume using hook =useContext
    const {blogs,load,reset,page}=useContext(AppContext);
  return (
    <div className='flex flex-col justify-center items-center w-1/2 gap-y-7 mt-28 mb-24'>
      {load ?(<Spinner></Spinner>):(blogs.length===0 ? (
        <div className='flex flex-col items-center gap-y-4'>
          <h1 className='text-3xl text-center mt-10'>No Blogs Found</h1>
          <button 
            onClick={()=>reset(page)}
            className='px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300'
          >
            Reset
          </button>
        </div>
      ):(blogs.map((blog)=><Card blog={blog} key={blog.id}></Card>)))
      }
    </div>
  )
}

export default Blog
