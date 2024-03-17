import React from 'react'
import mobile from './Mobile.png'
import arrow from './Arrow.png'
import vector from './Vector 14.png'
import classes from './styles.module.css'
import { Title } from '../../../5shared/ui/Title'
import { Button, buttonType } from '../../../5shared/ui/Button'

export const DownLoadInfo = () => {
  return (
    <>
      <div className={classes.downLoadBlock}>
        <img src={mobile} className={classes.mobile} alt='' />
        <div className={classes.infoBlock}>
          <Title
            size={'50px'}
            weight={700}
            lineHeight={'58px'}
            letterSpace={'0px'}
          >
            Premium <span style={{ color: '#6C5FBC' }}>Quality</span>
          </Title>
          <Title
            size={'50px'}
            weight={700}
            lineHeight={'58px'}
            letterSpace={'0px'}
          >
            For Your Health
          </Title>

          <ul className={classes.list}>
            <li className={classes.item}>
              Premium quality food is made with ingredients that are packed with
              essential vitamins, minerals.
            </li>
            <li className={classes.item}>
              These foods promote overall wellness by support healthy digestion
              and boosting immunity
            </li>
          </ul>
          <div style={{ textAlign: 'left', marginTop: '66px' }}>
            <Button
              btWidth={'188px'}
              btHeight={'60px'}
              btType={buttonType.filled}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
              >
                {' '}
                Download <img src={arrow} alt='' />
              </div>
            </Button>
          </div>
          <img src={vector} className={classes.vector} alt='' />
        </div>
      </div>
      <div className={classes.line}></div>
    </>
  )
}
