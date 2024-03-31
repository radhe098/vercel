import React from 'react'
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigateTo = useNavigate();

  const handleroute = () => {
    navigateTo('/space')
  }

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      {/* <video 
        src="/vercel-bg.mp4"
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          left: '50%',  
          top: '50%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: '-1'
        }}
      /> */}
     <div style={{ 
  position: 'relative', 
  overflow: 'hidden', 
  height: '100vh', 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center' 
}}>
  <video 
    src="/vercel-bg.mp4"
    autoPlay
    loop
    muted
    style={{
      position: 'absolute',
      width: '100%',
      left: '50%',
      top: '50%',
      height: '100%',
      objectFit: 'cover',
      transform: 'translate(-50%, -50%)',
      zIndex: '-1'
    }}
  />
  <div style={{ 
    backgroundColor: "#ffffff", 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center' 
  }} className='min-w-[32rem] border-black border-2 m-4 opacity-55 rounded-3xl overflow-hidden p-8'>
    <button onClick={handleroute} className='h-[200px] w-[900px] border bg-yellow-300 m-24 rounded-3xl text-5xl' style={{opacity:1}}>Enter Your Space</button>
  </div>  
</div>
    </div>
  )
}

export default Homepage