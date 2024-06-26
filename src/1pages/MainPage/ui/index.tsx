import React from 'react'
import { Header } from '../../../2widgets/Header/ui'
import { HeroBlock } from '../../../2widgets/HeroBlock/ui'
import { Hero } from '../../../2widgets/Hero/ui'
import { FeaturesList } from '../../../2widgets/FeatureList/ui'
import { DownLoadInfo } from '../../../2widgets/DownLoadInfo/ui'
import { DishesTopList } from '../../../2widgets/DishesTopList/ui'
import { PurchaseText } from '../../../2widgets/PurchaseText/ui'
import { Purchases } from '../../../2widgets/PurchaseIllustration/ui'
import { Review } from '../../../2widgets/Review/ui'
import { FAQ } from '../../../2widgets/FAQ/ui'
import { Footer } from '../../../2widgets/Footer/ui'
import classes from './styles.module.css'

export const MainPage = () => {
  return (
    <div className='App'>
      <Header />
      <div className={classes.heroBlockContainer}>
        <HeroBlock />
        <Hero />
      </div>
      <FeaturesList />
      <DownLoadInfo />
      <DishesTopList />
      <div className={classes.purchaseBlockContainer}>
        <PurchaseText />
        <Purchases />
      </div>
      <Review />
      <FAQ />
      <Footer />
    </div>
  )
}
