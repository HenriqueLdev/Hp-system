import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider,} from 'react-router-dom'
import About from './pages/About/About.jsx'
import Reneg from './pages/Reneg/Reneg.jsx'
import { UserProvider } from './Context/UserContext.jsx'

const Router=createBrowserRouter([
{
  path:'/',
  element:<App/>
},
{
  path:'/about',
  element:<About/>
},
{
  path:'renegociar',
  element:<Reneg/>
}

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UserProvider>
    <RouterProvider router={Router}></RouterProvider>
    </UserProvider>
  </React.StrictMode>,
)
