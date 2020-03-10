/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'
import { ChevronCircleIcon } from '@ltht-react/icon'
import useCard from '../store/card-hook'

const styles = (noData: boolean): SerializedStyles => {
  return css`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;

    &:hover {
      ${!noData && 'cursor: pointer;'}
    }
  `
}
const CardHeader: React.FC = ({ children }) => {
  const { noData, collapseButton, setCollapseButton } = useCard()
  const { showButton, collapsed } = collapseButton

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.preventDefault()
    if (collapseButton.showButton) {
      setCollapseButton({ ...collapseButton, collapsed: !collapseButton.collapsed })
    }
  }

  const titleText = showButton ? `Click to ${collapsed ? 'expand' : 'collapse'}` : ''

  return (
    <div css={styles(noData)} onClick={handleClick} title={titleText}>
      <div>{children}</div>
      {showButton && (
        <div>
          <ChevronCircleIcon direction={collapsed ? 'up' : 'down'} size="medium" />
        </div>
      )}
    </div>
  )
}

export default CardHeader
