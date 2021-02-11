import { HTMLAttributes, FC } from 'react'
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

const Alert: FC<Props> = ({ status = 'default', children, ...rest }) => (
  <Banner status={status} {...rest}>
    <StyledAlert>
      {status === 'default' && <InfoCircleIcon status="default" size="large" />}
      {status === 'info' && <InfoCircleIcon status="info" size="large" />}
      {status === 'warning' && <ExclamationIcon status="amber" size="large" />}
      {status === 'danger' && <ExclamationIcon status="red" size="large" />}
      <StyleContent className="alert__content">{children}</StyleContent>
    </StyledAlert>
  </Banner>
)

export interface Props extends HTMLAttributes<HTMLDivElement> {
  status?: StatusTypes
}

export default Alert
