import React, { HTMLAttributes } from 'react'
import Styled from '@emotion/styled'
import { InfoCircleIcon, ExclamationIcon } from '@ltht-react/icon'
import Banner, { StatusTypes } from './banner'

const StyledAlert = Styled.div`
  display: flex;
`

const StyleContent = Styled.div`
  margin-left: 0.5rem;
  flex: 1;
`

const Alert: React.FC<Props> = ({ status = 'default', children, ...rest }) => {
  return (
    <Banner status={status} {...rest}>
      <StyledAlert>
        {status === 'default' && <InfoCircleIcon size="large" />}
        {status === 'info' && <InfoCircleIcon size="large" />}
        {status === 'warning' && <ExclamationIcon size="large" />}
        {status === 'danger' && <ExclamationIcon size="large" />}
        <StyleContent className="alert__content">{children}</StyleContent>
      </StyledAlert>
    </Banner>
  )
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
  status?: StatusTypes
}

export default Alert
