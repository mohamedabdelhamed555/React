import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from "./component/Home/Home"
import About from './component/About/About';
import Portfolio from './component/Portfolio/Portfolio';
import Content from './component/Content/Content';
import NotFount from './component/NotFount/NotFount';
import Layout from './component/Layout/Layout';

function App() {

  const router =createBrowserRouter([
    {
    path:"",
    element:<Layout />,
    children:[
      {
        index:true,
        element:<Home />
      },

      {
      path:"about",
      element:<About />
      },
      {
      path:"Portfolio",
      element:<Portfolio />
      },
      {
      path:"contact",
      element:<Content />
      },
    ],
    },
    {
    path:"*",
    element:<NotFount />
    },
])


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
