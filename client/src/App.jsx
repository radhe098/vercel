import { useState } from 'react'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import Space from './pages/Space'
function App() {
  const [count, setCount] = useState(0)
  const Router = (createBrowserRouter([
    {path:'/space', element:<Space/> },
    {path:'/', element:<Homepage/> },
    {path:'/login', element:<Login/> },
    {path:'/register', element:<Register/> }
    
  ]))
  
  return (
    <>
    <RouterProvider router={Router} />



    </>
  )
}

export default App
