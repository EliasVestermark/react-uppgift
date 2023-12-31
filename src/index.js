import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './views/Home'
import Contact from './views/Contact'
import NotFound from './views/NotFound'
import News from './views/News'
import NewsId from './views/NewsId'
import ScrollToTop from './components/Generics/ScrollToTop'
import { ArticleProvider } from './contexts/ArticleContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ArticleProvider>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/news/:id' element={<NewsId/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </ArticleProvider>
    <ScrollToTop/>
      
    </BrowserRouter>
  </React.StrictMode>
)

