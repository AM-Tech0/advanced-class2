import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Footer = () => {
  const {page,pages,setPageHandler}=useContext(AppContext);
  return (
    <div className='w-full shadow-md h-16 flex items-center justify-center fixed bottom-0 left-0 bg-white border-2 z-10 gap-x-5'>
      <div className='w-1/2 flex ml-24 gap-x-5'>
        { page>1&&
           <button onClick={(()=>setPageHandler(page-1))} className='bg-gray-200 p-2 text-gray-800 rounded-md scale-100 hover:scale-95 transition duration-200'>Previous</button>
        }
       {page<pages&&
       <button onClick={(()=>setPageHandler(page+1))} className='bg-gray-200 p-2 text-gray-800 rounded-md scale-100 hover:scale-95 transition duration-200'>Next</button>
       }
        
      </div>
      <div className='font-semibold'>Page {page} of {pages}</div>
    </div>
  )
}

export default Footer;
