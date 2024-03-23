import React from 'react'
import classes from './styles.module.css'
import logo from './Logo.png'
import twiter from './Path 6.png'
import instagram from './Group 888.png'
import facebook from './Path 13.png'
import linkedin from './Path 7.png'
import { NavigationBar } from '../../../3features/NavigationBar'
export const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerNav}>
        <img src={logo} className={classes.logo} alt='' />
        <NavigationBar />
      </div>
      <div className={classes.lower}>
        <div className={classes.copyright}>
          © 2023 EATLY All Rights Reserved.
        </div>
        <div className={classes.socialMedia}>
          <img className={classes.socialIcon} src={instagram} alt='' />
          <img className={classes.socialIcon} src={linkedin} alt='' />
          <img className={classes.socialIcon} src={facebook} alt='' />
          <img className={classes.socialIcon} src={twiter} alt='' />
        </div>
      </div>
    </div>
  )
}
