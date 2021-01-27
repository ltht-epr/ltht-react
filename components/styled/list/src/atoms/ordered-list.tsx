import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'

const StyledOrderedList = styled.ol``

const OrderedList: React.FC<HTMLAttributes<HTMLOListElement>> = ({ children, ...rest }) => (
  <StyledOrderedList {...rest}>{children}</StyledOrderedList>
)

export default OrderedList
