import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router";
import App from './App';
import { About, Contact, GitHub, Home,User } from './components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<App/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user" element={<User/>}/>
      <Route path="github" element={<GitHub/>}/>
    </Route>
 )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
