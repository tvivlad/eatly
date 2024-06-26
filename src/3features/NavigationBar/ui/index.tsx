import React from 'react'
import classes from './styles.module.css'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className={classes.navbar}>
      <a href={'/#top'} className={classes.link}>
        Recipes
      </a>
      <a href={'/#faq'} className={classes.link}>
        FAQ
      </a>
      <Link to={'/blog'} className={classes.link}>
        Blog
      </Link>
    </div>
  )
}

export { NavigationBar }
