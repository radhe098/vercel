import React from 'react';
import { useNavigate } from 'react-router-dom';
const Slideshow = () => {
  const navigateTo = useNavigate();

  const handleroute = () => {
    navigateTo('/space')
  }

  return (  
    <>
      <div style={{ backgroundColor: "#ffffff"}} className='min-w-[32rem] border-black border-2 m-4 rounded-3xl overflow-hidden p-8'>
        <button onClick={handleroute} className='h-[200px] w-[900px] border bg-yellow-300 m-24 rounded-3xl text-5xl'>Enter Your Space</button>
      </div>  
    </>
  )
}

export default Slideshow;
