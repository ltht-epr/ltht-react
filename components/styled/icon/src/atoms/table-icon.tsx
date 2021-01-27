import React from 'react'
import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/core'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faTable } from '@fortawesome/free-solid-svg-icons'
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

const TableIcon: React.FC<IconProps> = ({ status, size }) => (
  <StyledFontAwesomeIcon
    className="icon__table"
    status={status}
    icon={faTable}
    size={calculateIconSize(size)}
    transform={{ rotate: 180 }}
  />
)

type StatusValues = 'red' | 'green' | 'amber' | 'info' | 'default'

interface StyledFontAwesomeIconProps extends FontAwesomeIconProps {
  status: StatusValues
}
interface IconProps {
  status: StatusValues
  size: IconSizes
}

export default TableIcon
