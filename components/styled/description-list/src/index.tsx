import { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'

import Term, { Props as TermProps } from './atoms/term'
import Description, { Props as DescriptionProps } from './atoms/description'

const StyledDescriptionList = styled.dl`
  list-style: none;
  margin-top: 1rem;
  margin-bottom: 0;
`

const DescriptionList: FC<DescriptionListProps> & DescriptionListComposition = ({ classes, children, ...rest }) => (
  <StyledDescriptionList className={classNames('description-list', classes)} {...rest}>
    {children}
  </StyledDescriptionList>
)

DescriptionList.Term = Term
DescriptionList.Description = Description

interface DescriptionListComposition {
  Term: FC<TermProps>
  Description: FC<DescriptionProps>
}

export interface DescriptionListProps extends HTMLAttributes<HTMLDListElement> {
  classes?: string
}

export default DescriptionList
