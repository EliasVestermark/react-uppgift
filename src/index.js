import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './views/Home'
import Contact from './views/Contact'
import NotFound from './views/NotFound'
import NewsAndArticles from './views/NewsAndArticles'
import News from './views/News'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/news' element={<NewsAndArticles/>}/>
        <Route path='/news/id' element={<News/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

