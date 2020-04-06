/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'

const styles = (hasClick: boolean): SerializedStyles => {
  return css`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;

    &:hover {
      ${hasClick && 'cursor: pointer;'}
    }
  `
}

const CardHeader: React.FC<Props> = ({ children, titleText = '', clickHandler = null }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.preventDefault()
    if (clickHandler != null) {
      clickHandler(e)
    }
  }

  return (
    <div css={styles(clickHandler != null)} onClick={handleClick} title={titleText}>
      <div>{children}</div>
    </div>
  )
}

interface Props {
  clickHandler?(e: React.MouseEvent<HTMLElement, MouseEvent>): void
  titleText?: string
}

export default CardHeader
