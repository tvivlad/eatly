import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from './1pages/MainPage/ui'
import { BlogPage } from './1pages/BlogPage/ui'
import { ArticleDetailPage } from './1pages/ArticleDetailPage/ui'
import { Error404Page } from './1pages/Error404Page/ui'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/blog'} element={<BlogPage />} />
        <Route path={'/blog/:id'} element={<ArticleDetailPage />} />
        <Route path={'/error'} element={<Error404Page />} />
        <Route path={'*'} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
