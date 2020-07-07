/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'

const styles = (isKeyItem: boolean): SerializedStyles => {
  return css`
    span:first-of-type {
      color: ${isKeyItem ? '#CCC' : '#666'};
    }
    span:last-of-type {
      color: ${isKeyItem ? '#FFF' : '#333333'};
    }
  `
}

const BennerItem: React.FC<Props> = ({ title, description, isKeyItem }) => {
  return (
    <div css={styles(isKeyItem)}>
      <span>{title}</span>
      <span>{description}</span>
    </div>
  )
}

interface Props {
  title?: string | null
  description: string
  isKeyItem: boolean
}

export default BennerItem
