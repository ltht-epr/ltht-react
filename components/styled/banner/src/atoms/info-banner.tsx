import React from 'react'
import Banner, { BannerProps } from './banner'

const InfoBanner: React.FC<BannerProps> = ({ children, clickHandler }) => {
  return (
    <Banner bannerStyle="info" clickHandler={clickHandler}>
      {children}
    </Banner>
  )
}

export default InfoBanner
