import React from 'react'
import { Header } from '../../../2widgets/Header/ui'
import { Footer } from '../../../2widgets/Footer/ui'
import classes from './styles.module.css'
import { Title } from '../../../5shared/ui/Title'
import { ArticleList } from '../../../2widgets/ArticleList/ui'
import { ArrowsNav } from '../../../3features/ArrowsNav/ui'

export const BlogPage = () => {
  return (
    <div className={classes.blogPage}>
      <Header />
      <div className={classes.article}>
        <Title
          size={'45px'}
          weight={600}
          lineHeight={'120%'}
          letterSpace={'0px'}
        >
          <div className={classes.titleAlign}>
            Latest <span className='violetForHeader'>Articles</span>
          </div>
        </Title>
        <ArticleList />
        <ArrowsNav />
      </div>
      <Footer />
    </div>
  )
}
