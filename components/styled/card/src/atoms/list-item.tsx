import { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'
import Icon from '@ltht-react/icon'
import { CARD_LIST_ITEM_BACKGROUND_HOVER, CARD_LIST_ITEM_SELECTED_BACKGROUND, ICON_COLOURS } from '@ltht-react/styles'

const shouldClick = (props: Props): boolean => props.onClick !== undefined

const canClick = (props: Props): boolean => props.onClick !== undefined && !props.selected

const background = (props: Props, defaultColour = 'inherit'): string =>
  props.selected ? CARD_LIST_ITEM_SELECTED_BACKGROUND : defaultColour

const hoverBackground = (props: Props): string => {
  let colour = 'inherit'
  if (shouldClick(props)) {
    colour = CARD_LIST_ITEM_SELECTED_BACKGROUND
    if (canClick(props)) {
      colour = CARD_LIST_ITEM_BACKGROUND_HOVER
    }
  }
  return colour
}

const hoverCursor = (props: Props): string => (canClick(props) ? 'pointer' : 'default')

const StyledListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  margin: 0;
  border: 1px solid #d6d6d6;
  border-width: 1px 0 0 0;
  background: ${(props: Props): string => background(props)};

  .card__list-item-container {
    flex: 1;
  }

  .card__list-item-selected&:before,
  .card__list-item-selected& + .card__list-item:before,
  &:hover:before,
  &:hover + .card__list-item:before {
    border-top-width: ${(props: Props): string => (shouldClick(props) ? '0' : '1px')};
  }

  & > .icon__chevron {
    margin-left: 1rem;
    color: ${ICON_COLOURS.GREY.LIGHTER25};
  }

  &:hover {
    background: ${(props: Props): string => hoverBackground(props)};
    cursor: ${(props: Props): string => hoverCursor(props)};
  }

  &:first-of-type {
    border-top-width: 0;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  &:last-child {
    border-bottom-width: 0;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }
`

const ListItem: FC<Props> = (props) => {
  const { classes, children, ...rest } = props
  const suffix = props?.selected === true ? '-selected' : ''
  return (
    <StyledListItem className={classNames(`card__list-item${suffix}`, classes)} {...rest}>
      <div className="card__list-item-container">{children}</div>
      {shouldClick(props) && <Icon type="chevron" size="medium" direction="right" />}
    </StyledListItem>
  )
}

export interface Props extends HTMLAttributes<HTMLLIElement> {
  classes?: string
  selected?: boolean
}

export default ListItem
