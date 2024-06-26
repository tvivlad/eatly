import React from 'react'
import { NavigationBar } from '../../../3features/NavigationBar'
import Logo from './Logo.png'
import classes from './styles.module.css'
export const Header = () => {
  return (
    <div>
      <div className={classes.header}>
        <img src={Logo} className={classes.logo} alt='' />
        <NavigationBar />
      </div>
      <div className={classes.line}></div>
    </div>
  )
}
