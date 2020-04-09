/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { ICON_COLOURS, IconSizes } from '@ltht-react/styles'

const BadgeIcon: React.FC<BadgeIconProps> = ({ status }) => {
  const styles = css`
    ${status === 'green' && `color: ${ICON_COLOURS.SUCCESS};`}
    ${status === 'amber' && `color: ${ICON_COLOURS.WARNING};`}
    ${status === 'red' && `color: ${ICON_COLOURS.DANGER};`}
    ${status === 'primary' && `color: ${ICON_COLOURS.PRIMARY};`}
    ${status === 'secondary' && `color: ${ICON_COLOURS.SECONDARY};`}
    ${status === 'default' && `color: ${ICON_COLOURS.DEFAULT};`}
  `

  const numberStyles = css`
    font-weight: bold;
  `

  return (
    <span className="fa-layers fa-fw">
      <i className="fas">
        <FontAwesomeIcon css={styles} icon={faCircle} size="2x" />
      </i>
      <span className="fa-layers-text fa-inverse fa-xs" css={numberStyles}>
        2
      </span>
    </span>
  )
}

type BadgeIconProps = {
  status: 'red' | 'green' | 'amber' | 'primary' | 'secondary' | 'default'
  size: IconSizes
}

export default BadgeIcon
