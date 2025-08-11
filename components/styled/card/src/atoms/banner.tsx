import { HTMLAttributes, ReactNode, forwardRef } from 'react'
import Banner from '@ltht-react/banner'
import { StatusTypes } from '@ltht-react/types'

const CardBanner = forwardRef<HTMLDivElement, Props>(({ status = 'info', icon, children, ...rest }, ref) => (
  <Banner ref={ref} type={status} icon={icon} {...rest}>
    {children}
  </Banner>
))

export interface Props extends HTMLAttributes<HTMLDivElement> {
  status: StatusTypes
  icon?: ReactNode
}

export default CardBanner
