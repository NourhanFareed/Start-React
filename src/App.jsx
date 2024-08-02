import {createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import Porfolio from './Components/Porfolio/Porfolio'

function App() {

  let router = createHashRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'portfolio', element: <Porfolio /> },
        { path: 'contact', element: <Contact /> }
      ]

    }

  ])


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
