import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Profile from './Profile.jsx'
import User from './User.jsx'
import "./index.css";
import PostPage from './PostPage.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='account'>
      <Route path='profile' element={<Profile/>}/>
      </Route>
      <Route path='/User/:username' element={<User/>}/>
      <Route path='/post/:postId' element={<PostPage/>}/>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
