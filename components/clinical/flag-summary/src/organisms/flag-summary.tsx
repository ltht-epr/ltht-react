import { HTMLAttributes, FC } from 'react'
import Styled from '@emotion/styled'

import { Flag } from '@ltht-react/types'
import { PeriodSummary } from '@ltht-react/summary'

import Title from '../atoms/flag-title'
import Description from '../atoms/flag-description'
import Status from '../atoms/flag-status'
import Redacted from '../molecules/flag-redacted'

const StyledSummary = Styled.div`
  display: flex;
  justify-content: center;
`
const StyledDescription = Styled.div`
  flex-grow: 1;
`
const StyledDate = Styled.div`
  text-align: right;
`

const FlagSummary: FC<Props> = ({ flag, ...rest }) => {
  if (flag.metadata.isRedacted) {
    return (
      <StyledSummary {...rest}>
        <Redacted flag={flag} />
      </StyledSummary>
    )
  }

  return (
    <StyledSummary {...rest}>
      <StyledDescription>
        <Title flag={flag} />
        <Description flag={flag} />
      </StyledDescription>
      <StyledDate>
        <PeriodSummary period={flag.period} />
        <Status flag={flag} />
      </StyledDate>
    </StyledSummary>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  flag: Flag
}

export default FlagSummary
