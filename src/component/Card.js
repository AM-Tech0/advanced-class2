import React from 'react'

const Card = ({ blog }) => {
  return (
    <div className='flex flex-col justify-center  font-serif gap-1' key={blog.id}>
      <p className='font-bold text-lg'>{blog.title}</p>
      <p className='text-sm text-gray-600'>By <span className='italic'>{blog.author}</span> on <span className='underline font-bold hover:text-black cursor-pointer'>{blog.category}</span></p>
      <p className='text-xs text-gray-500'>Posted on <span>{blog.date}</span></p>
      <p className='mt-2'>{blog.content}</p>
      <div className='flex  gap-x-2 cursor-pointer '>
        {blog.tags.map((tag,index)=><span key={index} className='text-blue-500 hover:text-blue-700 underline '>{`#${tag}`}</span>
      )}
      </div>
    
    </div>
  )
}

export default Card
