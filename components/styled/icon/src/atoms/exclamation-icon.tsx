import React from 'react'
import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/core'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { ICON_COLOURS, IconSizes, calculateIconSize } from '@ltht-react/styles'

const calculateIconColor = (status: string): SerializedStyles => css`
  ${status === 'green' && `${ICON_COLOURS.SUCCESS.VALUE};`}
  ${status === 'amber' && `${ICON_COLOURS.WARNING};`}
  ${status === 'red' && `${ICON_COLOURS.DANGER};`}
  ${status === 'default' && `${ICON_COLOURS.DEFAULT};`}
  ${status === 'info' && `${ICON_COLOURS.INFO};`}
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<StyledFontAwesomeIconProps>`
  color: ${({ status }): SerializedStyles => calculateIconColor(status)};
`

const ExclamationIcon: React.FC<ExclamationIconProps> = ({ status, size }) => (
  <StyledFontAwesomeIcon
    className="icon__exclamation"
    status={status}
    icon={faExclamationTriangle}
    size={calculateIconSize(size)}
  />
)

type StatusValues = 'red' | 'green' | 'amber' | 'info' | 'default'

interface StyledFontAwesomeIconProps extends FontAwesomeIconProps {
  status: StatusValues
}

interface ExclamationIconProps {
  status: StatusValues
  size: IconSizes
}

export default ExclamationIcon
