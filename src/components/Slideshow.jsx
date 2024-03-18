import React from 'react'
// import reactimg from '/assets/simon-hajducki-yGMw4KpX4CE-unsplash.jpg'
const Slideshow = () => {
  return (
    <>
    
      <div style={{ backgroundColor: "#ffffff"}} className='h-[24rem] min-w-[32rem]  border-black border-2 m-4 rounded-3xl  overflow-hidden '>

        <div className='border-b-black border-1 h-[22rem] w-[auto] flex justify-center    '>

        <img src="/src/assets/the secret.jpeg" className='object-cover rounded-3xl mt-3 h-[22rem] min-w-[28rem] font-poppins' alt="" />
        <div className='discription w-64 h-40 p-3 '>
        The Secret is a 2006 self-help book by Rhonda Byrne, based on the earlier film of the same name. It is based on the belief of the pseudoscientific law of attraction, which claims that thought alone can influence objective circumstances within ones life . The book alleges energy as assurance of its effectiveness.
        </div>
        </div>
      </div>  
    </>
  )
}

export default Slideshow
