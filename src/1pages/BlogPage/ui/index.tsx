import React from 'react'
import { Header } from '../../../2widgets/Header/ui'
import { Footer } from '../../../2widgets/Footer/ui'
import classes from './styles.module.css'
import { Articles } from '../../../2widgets/Articles/ui'

export const BlogPage = () => {
  return (
    <div className={classes.blogPage}>
      <Header />
      <Articles />
      <Footer />
    </div>
  )
}
