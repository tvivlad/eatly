import React from 'react'
import { FAQList } from '../../../3features/FAQList/ui'
import { Title } from '../../../5shared/ui/Title'
import classes from './style.module.css'

export const FAQ = () => {
  return (
    <div id='faq' className={classes.faq}>
      <div className={classes.faqTitleBlock}>
        <Title
          size={'45px'}
          weight={600}
          lineHeight={'120%'}
          letterSpace={'0px'}
        >
          <div style={{ textAlign: 'center' }}>
            Frequently Asked <span style={{ color: '#6C5FBC' }}>Questions</span>
          </div>
        </Title>
      </div>
      <FAQList />
    </div>
  )
}
