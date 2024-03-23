import React, { FC } from 'react'
import { FAQItem } from '../../../5shared/ui/FAQItem'
import classes from './styles.module.css'

// interface FAQListProps {
//   questionList: string[]
// }

// export const FAQList: FC<FAQListProps> = ({ questionList }) => {
export const FAQList = () => {
  const questionsList = [
    {
      question: 'How long does delivery take?',
      answer:
        'You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?',
    },
    {
      question: 'How Does It Work ?',
      answer:
        'You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?',
    },
    {
      question: 'How does your food delivery service work?',
      answer:
        'You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?',
    },
    {
      question: 'What payment options do you accept?',
      answer:
        'You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?',
    },
    {
      question: 'Do you offer discounts or promotions?',
      answer:
        'You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?',
    },
  ]
  return (
    <div className={classes.faqList}>
      {questionsList.map((question) => (
        <FAQItem question={question.question} answer={question.answer} />
      ))}
    </div>
  )
}
