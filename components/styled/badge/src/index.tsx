import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { CSS_RESET, BADGE_COLOURS, TABLET_MEDIA_QUERY, DESKTOP_MEDIA_QUERY } from '@ltht-react/styles'

const setBackgroundColor = (type: BadgeTypes) => {
  switch (type) {
    case 'primary':
      return `${BADGE_COLOURS.PRIMARY}`
    case 'standard':
      return `${BADGE_COLOURS.STANDARD}`
    case 'workflow':
      return `${BADGE_COLOURS.WORKFLOW}`
    case 'danger':
      return `${BADGE_COLOURS.DANGER}`
    default:
      return ``
  }
}

const StyledBadge = styled.span<IStyledBadgeProps>`
  ${CSS_RESET};

  padding: 0.3rem 1rem;
  margin: 0.1rem 0;
  border-radius: 12px;
  color: white;
  font-size: 0.6rem;
  font-weight: bold;
  background-color: ${({ type }) => setBackgroundColor(type)};

  ${TABLET_MEDIA_QUERY} {
    font-size: 0.7rem;
  }

  ${DESKTOP_MEDIA_QUERY} {
    font-size: 0.8rem;
  }
`

const Badge: FC<IProps> = ({ type = 'standard', children, ...rest }) => (
  <StyledBadge type={type} {...rest}>
    {children}
  </StyledBadge>
)

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  type?: BadgeTypes
}

interface IStyledBadgeProps {
  type: BadgeTypes
}

type BadgeTypes = 'primary' | 'standard' | 'workflow' | 'danger'

export default Badge
