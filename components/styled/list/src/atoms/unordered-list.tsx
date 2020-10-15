/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const UnorderedList: React.FC<Props> = ({ bullet = 'none', children }) => {
  const styles = css`
    ${`list-style-type: ${bullet};`}
    list-style-position: inside;
  `
  return (
    <ul className="list" css={styles}>
      {children}
    </ul>
  )
}

type Props = {
  bullet?: 'none' | 'disc' | 'circle'
}

export default UnorderedList
