/* eslint-disable react/jsx-props-no-spreading */
import React, { HtmlHTMLAttributes } from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  border-width: 1px 0 1px 0;
  list-style-type: none;

  &:first-child {
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

const List: React.FC<Props> = ({ classes, children, ...rest }) => {
  return (
    <StyledList className={classNames('card__list', classes)} {...rest}>
      {children}
    </StyledList>
  )
}

export interface Props extends HtmlHTMLAttributes<HTMLUListElement> {
  classes?: string
}

export default List
