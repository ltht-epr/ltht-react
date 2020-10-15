/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { ICON_COLOURS, IconSizes, calculateIconSize } from '@ltht-react/styles'

const CounterIcon: React.FC<CounterIconProps> = ({ status, size, value }) => {
  const styles = css`
    width: 100% !important;
    ${status === 'green' && `color: ${ICON_COLOURS.SUCCESS.VALUE};`}
    ${status === 'amber' && `color: ${ICON_COLOURS.WARNING};`}
    ${status === 'red' && `color: ${ICON_COLOURS.DANGER};`}
    ${status === 'primary' && `color: ${ICON_COLOURS.PRIMARY};`}
    ${status === 'secondary' && `color: ${ICON_COLOURS.SECONDARY};`}
    ${status === 'default' && `color: ${ICON_COLOURS.DEFAULT.VALUE};`}
    ${status === 'info' && `color: ${ICON_COLOURS.INFO};`}
  `

  const numberStyles = css`
    font-weight: bold;
  `

  return (
    <span className="fa-layers fa-fw">
      <FontAwesomeIcon className="icon__counter" css={styles} icon={faCircle} size={calculateIconSize(size)} />
      <span className="fa-layers-text fa-inverse fa-xs" css={numberStyles}>
        {value}
      </span>
    </span>
  )
}

type CounterIconProps = {
  status: 'red' | 'green' | 'amber' | 'primary' | 'secondary' | 'default' | 'info'
  size: IconSizes
  value: number
}

export default CounterIcon
