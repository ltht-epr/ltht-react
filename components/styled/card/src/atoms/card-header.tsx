/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'

const styles = (hasClick: boolean, position: 'space-between' | 'center'): SerializedStyles => {
  return css`
    display: flex;
    justify-content: ${position};
    padding: 0.5rem !important;

    &:hover {
      ${hasClick && 'cursor: pointer;'}
    }
  `
}

const CardHeader: React.FC<Props> = ({ children, position = 'space-between', titleText = '', clickHandler = null }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.preventDefault()
    if (clickHandler != null) {
      clickHandler(e)
    }
  }

  return (
    <div css={styles(clickHandler != null, position)} onClick={handleClick} title={titleText}>
      <React.Fragment>{children}</React.Fragment>
    </div>
  )
}

interface Props {
  clickHandler?(e: React.MouseEvent<HTMLElement, MouseEvent>): void
  titleText?: string
  position?: 'space-between' | 'center'
}

export default CardHeader
