/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

const OrderedList: React.FC = ({ children }) => {
  return <ol>{children}</ol>
}

export default OrderedList
