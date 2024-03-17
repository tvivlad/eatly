import React from 'react'
import classes from './styles.module.css'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className={classes.navbar}>
      <Link to={'#'} className={classes.link}>
        Recipes
      </Link>
      <Link to={'#'} className={classes.link}>
        FAQ
      </Link>
      <Link to={'#'} className={classes.link}>
        Blog
      </Link>
    </div>
  )
}

export { NavigationBar }
