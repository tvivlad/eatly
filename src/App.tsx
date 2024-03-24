import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from './1pages/MainPage/ui'
import { BlogPage } from './1pages/BlogPage/ui'
import { ArticleDetailPage } from './1pages/ArticleDetailPage/ui'

interface RouterProps {
  children: Element[]
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/blog'} element={<BlogPage />} />
        <Route path={'/blog/:id'} element={<ArticleDetailPage />} />
        <Route path={'/art'} element={<ArticleDetailPage />} />
        <Route path={'*'} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
