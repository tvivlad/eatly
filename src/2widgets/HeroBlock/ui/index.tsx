import React from 'react'
import classes from './styles.module.css'
import { Title } from '../../../5shared/ui/Title'
import { Button, buttonType } from '../../../5shared/ui/Button'
export const HeroBlock = () => {
  return (
    <div className={classes.heroBlock}>
      <div className={classes.overContainer}>
        <div className={classes.overLine}></div>
        <div className={classes.overText}>OVER 1000 USERS</div>
      </div>

      <Title
        size={'76px'}
        weight={600}
        letterSpace={'-3px'}
        lineHeight={'120%'}
      >
        Enjoy Foods All Over The <span style={{ color: '#6C5FBC' }}>World</span>
      </Title>

      <div className={classes.heroText}>
        EatLy help you set saving goals, earn cash back offers, Go to disclaimer
        for more details and get paychecks up to two days early. Get a{' '}
        <span style={{ color: '#6C5FBC' }}>$20 bonus</span>.
      </div>
      <div className={classes.heroButtons}>
        <Button btWidth={'154px'} btHeight={'60px'} btType={buttonType.filled}>
          Get Started
        </Button>
        <Button
          btWidth={'116px'}
          btHeight={'60px'}
          btType={buttonType.outlined}
        >
          Go Pro
        </Button>
      </div>
    </div>
  )
}
