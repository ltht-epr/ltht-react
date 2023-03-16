import { HTMLAttributes, FC } from 'react'
import Styled from '@emotion/styled'

import { Flag } from '@ltht-react/types'
import { PeriodSummary } from '@ltht-react/type-summary'

import Title from '../atoms/flag-title'
import Text from '../atoms/flag-text'
// import Description from '../atoms/flag-description'
// import Status from '../atoms/flag-status'
import Redacted from '../molecules/flag-redacted'

const StyledSummary = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const StyledDescription = Styled.div`
  flex-grow: 1;
`
const StyledDate = Styled.div`
  text-align: right;
`
const StyledText = Styled.div`
  flex-basis: 100%;
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
        {/* <Description flag={flag} /> */}
      </StyledDescription>
      <StyledDate>
        <PeriodSummary period={flag.period} />
        {/* <Status flag={flag} /> */}
      </StyledDate>
      <StyledText>
        <Text flag={flag} />
      </StyledText>
    </StyledSummary>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  flag: Flag
}

export default FlagSummary
