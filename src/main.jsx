import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Skills from './components/skill/Skills.jsx'
import Projects from './components/Project/Projects.jsx'
import About from './components/About/About.jsx'
import BeyondTheCode from './components/Beyond/BeyondTheCode.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Home/>}/>
      <Route path="projects" element={<Projects/>}/>
      <Route path="skills" element={<Skills/>}/>
      <Route path="about-me" element={<About/>}/>
      <Route path="beyond-the-code" element={<BeyondTheCode/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
