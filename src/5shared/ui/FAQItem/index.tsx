import React, { FC, useState } from 'react'
import classes from './style.module.css'
interface FAQItemProps {
  question: string
  answer: string
}

export const FAQItem: FC<FAQItemProps> = ({ question, answer }) => {
  const [showDetail, setShowDetail] = useState(false)
  return (
    <div className={classes.question}>
      <div className={classes.questionText}>
        <div>{question}</div>{' '}
        <button
          className={classes.btn}
          onClick={() => setShowDetail((prev) => !prev)}
        >
          {showDetail ? '-' : '+'}
        </button>
      </div>
      {showDetail && <div className={classes.answerText}>{answer}</div>}
    </div>
  )
}
