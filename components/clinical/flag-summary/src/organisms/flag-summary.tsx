import { HTMLAttributes, FC } from 'react'
import Styled from '@emotion/styled'

import { Flag } from '@ltht-react/types'
import { PeriodSummary } from '@ltht-react/type-summary'

import Text from '../atoms/flag-text'
import Identifier from '../molecules/flag-identifier'
import Redacted from '../molecules/flag-redacted'

const StyledSummary = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const StyledDate = Styled.div`
  text-align: right;
`
const StyledText = Styled.div`
  flex-basis: 100%;
`

// TODO: 2. FIxup storybook data to have single list of flags again, 3. add storybook for narrative summary? 4. add icon to flag storybook data
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
      <Identifier flag={flag} />
      <StyledDate>
        <PeriodSummary period={flag.period} />
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
