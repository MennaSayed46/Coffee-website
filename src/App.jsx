import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Layout from './components/Layout/Layout';
import OurMenu from './components/OurMenu/OurMenu';

import Shop from './components/Shop/Shop';
import Faq from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';

function App() {

  let router = createBrowserRouter([
    {path:'/',element:<Layout/>,children:[
      {path:'',element:<Home/>},
      {path:'/home',element:<Home/>},
      {path:'/about',element:<About/>},
      {path:'/menu',element:<OurMenu/>},
      {path:'/shop',element:<Shop/>},
      {path:'/faq',element:<Faq/>},
      {path:'/contact',element:<Contact/>},

    ]}
  
  ])


  return (
    <>
    <RouterProvider router={router}>

    </RouterProvider>
      

    </>
  )
}

export default App
