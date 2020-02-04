/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'
import ChevronIcon from '@ltht-react/chevron-icon'
import { useWidget } from './widget-context'

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
const WidgetHeader: React.FC = ({ children }) => {
  const { noData, collapseButton, setCollapseButton } = useWidget()
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
          <ChevronIcon direction={collapsed ? 'up' : 'down'} size="medium" />
        </div>
      )}
    </div>
  )
}

export default WidgetHeader
