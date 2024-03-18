import { useState } from 'react'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Space from './pages/Space'
function App() {
  const [count, setCount] = useState(0)
  const Router = (createBrowserRouter([
    {path:'/space', element:<Space/> },
    {path:'/', element:<Homepage/> }
  ]))
  
  return (
    <>
    <RouterProvider router={Router} />



    </>
  )
}

export default App
