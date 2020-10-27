import React from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'

export interface Props {
  classes?: string
}

const StyledFooter = styled.div`
  padding: 0.75rem 1.25rem;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
`

const Footer: React.FC<Props> = ({ classes, children }) => {
  return <StyledFooter className={classNames('card__footer', classes)}>{children}</StyledFooter>
}

export default Footer
