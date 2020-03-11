/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const UnorderedList: React.FC<Props> = ({ bullet = 'none', children }) => {
  const styles = css`
    ${`list-style-type: ${bullet};`}
  `
  return <ul css={styles}>{children}</ul>
}

type Props = {
  bullet?: 'none' | 'disc' | 'circle'
}

export default UnorderedList
