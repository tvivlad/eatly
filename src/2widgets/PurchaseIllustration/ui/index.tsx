import React from 'react'
import classes from './styles.module.css'
import expense from './expense icon.png'
import voucher from './voucherUsage icon.png'

import { PurchaseFeatureCard } from '../../../5shared/ui/PurchaseFeatureCard'
export const Purchases = () => {
  return (
    <div className={classes.purchasesCard}>
      <div className={classes.purchasesHeader}>
        <div className={classes.purchasesTitle}>Purchases</div>
        <select className={classes.selectText}>
          <option value='' key='1'>
            This month
          </option>
          <option value='' key='2'>
            This year
          </option>
          <option value='' key='3'>
            Today
          </option>
        </select>
      </div>
      <div className={classes.purchaseFeatureList}></div>
      <PurchaseFeatureCard
        featureName={'Expense'}
        featureIcon={expense}
        featureStatus={'Increased By 10%'}
        featureEffect={409}
        featurePercentage={73}
        featureColor={'#6C5FBC'}
      />
      <PurchaseFeatureCard
        featureName={'Voucher Usage'}
        featureIcon={voucher}
        featureStatus={'Increased By 5%'}
        featureEffect={409}
        featurePercentage={60}
        featureColor={'#FBAD18'}
      />
    </div>
  )
}
