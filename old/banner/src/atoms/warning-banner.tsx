import React from 'react'
import Banner, { BannerProps } from './banner'

const WarningBanner: React.FC<BannerProps> = ({ children, clickHandler }) => {
  return (
    <Banner bannerStyle="warning" clickHandler={clickHandler}>
      {children}
    </Banner>
  )
}

export default WarningBanner
