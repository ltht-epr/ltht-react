import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

const StyledOrderedList = styled.ol``

const OrderedList: FC<HTMLAttributes<HTMLOListElement>> = ({ children, ...rest }) => (
  <StyledOrderedList {...rest}>{children}</StyledOrderedList>
)

export default OrderedList
