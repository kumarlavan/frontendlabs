import React from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './components/Home/Home'
import Subjects from './components/questions/Subjects'
import HtmlQuestion from './components/questions/HTMLQuestions/HtmlQuestion'
import About from './components/About/About'
import Questions from './components/questions/Questions'
import Contact from './components/Contact/Contact'
import CSSQuestions from './components/questions/CSSQuestions/CSSQuestions'
import ReactQuestion from './components/questions/ReactQuestions/ReactQuestion'
import JavaScriptQuestion from './components/questions/JavascriptQuestions/JavascriptQuestion'
import Team from './components/About/Team'
import LearnMore from './components/About/LearnMore'
import PrivateComp from './components/privatecomponents/PrivateComp'
import ScrollToTop from './components/helpersHOC/ScrollToTop'
function App() {
  const route=createBrowserRouter([
    {
      path:"/",
      element:<Dashboard/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/ourTeam",
          element:<Team/>
        },
        {
          path:"/learnmore",
          element:<LearnMore/>
        },
        {
          path:"/questions",
          element:<Questions/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        
        {
          path:"/subjects",
          element:<ScrollToTop><Subjects/></ScrollToTop>,
          children:[
            {
              path:"/subjects/html",
              element: <HtmlQuestion/>
            },
            {
              path:"/subjects/css",
              element:<CSSQuestions/>
            },
            {
              path:"/subjects/react",
              element:<PrivateComp>
                <ReactQuestion/>
              </PrivateComp>
            },
            {
              path:"/subjects/javascript",
              element:<JavaScriptQuestion/>
            }
          ]
        },
      ]
    }
  ])

  return <RouterProvider router={route}/>
}

export default App
