import { HTMLAttributes, FC, ReactNode } from 'react'
import Banner from '@ltht-react/banner'
import { StatusTypes } from '@ltht-react/types'

const CardBanner: FC<Props> = ({ status = 'info', icon, children, ...rest }) => (
  <Banner type={status} icon={icon} {...rest}>
    {children}
  </Banner>
)

export interface Props extends HTMLAttributes<HTMLDivElement> {
  status: StatusTypes
  icon?: ReactNode
}

export default CardBanner
