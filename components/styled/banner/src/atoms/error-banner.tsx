import React from 'react'
import Banner, { BannerProps } from './banner'

const ErrorBanner: React.FC<BannerProps> = ({ children, clickHandler }) => {
  return (
    <Banner bannerStyle="error" clickHandler={clickHandler}>
      {children}
    </Banner>
  )
}

export default ErrorBanner
