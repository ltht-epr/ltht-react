import React, { HTMLAttributes } from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'

const StyledDescriptionTerm = styled.dt`
  color: ${TEXT_COLOURS.SECONDARY.LIGHTER25};
  margin-bottom: 0.25rem;
`

const Term: React.FC<Props> = ({ children, classes, ...rest }) => {
  return (
    <StyledDescriptionTerm className={classNames('description-list__term', classes)} {...rest}>
      {children}
    </StyledDescriptionTerm>
  )
}

export interface Props extends HTMLAttributes<HTMLElement> {
  classes?: string
}

export default Term
