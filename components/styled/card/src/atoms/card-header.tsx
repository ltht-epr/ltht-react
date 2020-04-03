/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'
// import { ChevronCircleIcon } from '@ltht-react/icon'
// import useCard from '../store/card-hook'

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
  // const { collapseButton, setCollapseButton } = useCard()
  // const { showButton, collapsed } = collapseButton

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.preventDefault()
    if (clickHandler != null) {
      clickHandler(e)
    }
  }

  // const titleText = showButton ? `Click to ${collapsed ? 'expand' : 'collapse'}` : ''

  return (
    <div css={styles(clickHandler != null)} onClick={handleClick} title={titleText}>
      <div>{children}</div>
      {/* {showButton && (
        <div>
          <ChevronCircleIcon direction={collapsed ? 'up' : 'down'} size="medium" />
        </div>
      )} */}
    </div>
  )
}

interface Props {
  clickHandler?(e: React.MouseEvent<HTMLElement, MouseEvent>): void
  titleText?: string
}

export default CardHeader
