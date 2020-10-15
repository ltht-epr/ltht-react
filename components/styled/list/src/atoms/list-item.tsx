/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

const ListItem: React.FC<Props> = ({ children, tabIndex }) => {
  if (tabIndex) return <li tabIndex={tabIndex}>{children}</li>

  return <li className="list__item">{children}</li>
}

interface Props {
  tabIndex?: number
}

export default ListItem
