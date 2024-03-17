import React from 'react'
import logo from './logo.svg'
import './App.css'

import { NavigationBar } from './3features/NavigationBar'
import { Header } from './2widgets/Header'
import Logo from './5shared/ui/Logo/Logo'
import { BrowserRouter } from 'react-router-dom'
import { HeroBlock } from './2widgets/HeroBlock'
import { Title } from './5shared/ui/Title'
import { Hero } from './2widgets/Hero/ui'
import { FeaturesList } from './2widgets/FeatureList/ui'
import { DownLoadInfo } from './2widgets/DownLoadInfo/ui'
import { DishesTopList } from './2widgets/DishesTopList/ui'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <div style={{ display: 'flex', alignItems: 'start' }}>
          <HeroBlock />
          <Hero />
        </div>
        <FeaturesList />
        <DownLoadInfo />
        <DishesTopList />
      </div>
    </BrowserRouter>
  )
}

export default App
