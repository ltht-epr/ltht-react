import React from 'react'
import Banner, { BannerProps } from './banner'

const PrimaryBanner: React.FC<BannerProps> = ({ children, clickHandler }) => {
  return (
    <Banner bannerStyle="primary" clickHandler={clickHandler}>
      {children}
    </Banner>
  )
}

export default PrimaryBanner
