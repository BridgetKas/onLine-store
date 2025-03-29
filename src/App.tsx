import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './Components/layout/Layout'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      errorElement:<p>We got a problem.</p>,
      children:[
        {
          path:'/categories',
          element:<p>Cat</p>
        },
        {
          path:'/shoes',
          element:<p>Shoes</p>
        },
        {
          path:'/bags',
          element:<p>Bags</p>
        },
        {
          path:'/runners',
          element:<p>Runners</p>
        }
      ]
    },

  ])

  return (
    <>
      <RouterProvider router ={router}/>
    </>
  )
}

export default App
