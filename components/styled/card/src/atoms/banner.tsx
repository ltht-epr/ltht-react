import { HTMLAttributes, FC } from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'
import { ChevronIcon } from '@ltht-react/icon'
import { BANNER_COLOURS } from '@ltht-react/styles'

interface StyleProps {
  background: string
  borderBottom: string
  borderTop: string
  color: string
  hover: string
  icon: string
}

const styles = ({ status = 'default' }: Props): StyleProps => {
  switch (status) {
    case 'danger':
      return {
        background: BANNER_COLOURS.DANGER.BACKGROUND,
        borderBottom: BANNER_COLOURS.DANGER.BORDER,
        borderTop: BANNER_COLOURS.DANGER.BORDER,
        color: BANNER_COLOURS.DANGER.TEXT,
        hover: BANNER_COLOURS.DANGER.HOVER,
        icon: BANNER_COLOURS.DANGER.ICON,
      }
    case 'info':
      return {
        background: BANNER_COLOURS.INFO.BACKGROUND,
        borderBottom: BANNER_COLOURS.INFO.BORDER,
        borderTop: BANNER_COLOURS.INFO.BORDER,
        color: BANNER_COLOURS.INFO.TEXT,
        hover: BANNER_COLOURS.INFO.HOVER,
        icon: BANNER_COLOURS.INFO.ICON,
      }
    case 'warning':
      return {
        background: BANNER_COLOURS.WARNING.BACKGROUND,
        borderBottom: BANNER_COLOURS.WARNING.BORDER,
        borderTop: BANNER_COLOURS.WARNING.BORDER,
        color: BANNER_COLOURS.WARNING.TEXT,
        hover: BANNER_COLOURS.WARNING.HOVER,
        icon: BANNER_COLOURS.WARNING.ICON,
      }
    case 'default':
    default:
      return {
        background: BANNER_COLOURS.DEFAULT.BACKGROUND,
        borderBottom: BANNER_COLOURS.DEFAULT.BORDER,
        borderTop: BANNER_COLOURS.DEFAULT.BORDER,
        color: BANNER_COLOURS.DEFAULT.TEXT,
        hover: BANNER_COLOURS.DEFAULT.HOVER,
        icon: BANNER_COLOURS.DEFAULT.ICON,
      }
  }
}

const StyledBanner = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  z-index: 1;

  background: ${(props: Props): string => styles(props).background};
  color: ${(props: Props): string => styles(props).color};
  border-top: 1px solid ${(props: Props): string => styles(props).borderTop};
  border-bottom: 1px solid ${(props: Props): string => styles(props).borderBottom};

  & > .card__banner_content {
    flex: 1;
  }

  & > [class^='icon__'] {
    color: ${(props: Props): string => styles(props).icon};
  }

  &:hover {
    background: ${(props: Props): string => (canClick(props) ? styles(props).hover : styles(props).background)};
    cursor: ${(props: Props): string => (canClick(props) ? 'pointer' : 'default')};
  }
`

const Banner: FC<Props> = props => {
  const { classes, children, ...rest } = props
  return (
    <StyledBanner className={classNames(`card__banner-${props?.status || 'default'}`, classes)} {...rest}>
      <div className="card__banner_content">{children}</div>
      {canClick(props) && <ChevronIcon size="medium" direction="right" />}
    </StyledBanner>
  )
}

const canClick = (props: Props): boolean => props.onClick !== undefined

export type StatusTypes = 'default' | 'info' | 'danger' | 'warning'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  classes?: string
  status?: StatusTypes
}

export default Banner
