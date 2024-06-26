import React from 'react'
import classes from './styles.module.css'
import { Title } from '../../../5shared/ui/Title'
import { ArticleList } from '../../../3features/ArticleList/ui'
import { ArrowsNav } from '../../../3features/ArrowsNav/ui'
export const Articles = () => {
  return (
    <div className={classes.article}>
      <Title size={'45px'} weight={600} lineHeight={'120%'} letterSpace={'0px'}>
        <div style={{ textAlign: 'center' }}>
          Latest<span style={{ color: '#6C5FBC' }}>Articles</span>
        </div>
      </Title>
      <ArticleList />
      <ArrowsNav />
    </div>
  )
}
