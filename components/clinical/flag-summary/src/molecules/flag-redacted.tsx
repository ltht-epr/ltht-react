import React from 'react'
import styled from '@emotion/styled'
import { Flag } from '@ltht-react/types'
import { RedactedDescription, PeriodSummary } from '@ltht-react/summary'

const StyledRedactedDescription = styled.div`
  flex-grow: 1;
  text-align: left;
`

const StyledPeriodSummary = styled.div`
  text-align: right;
`

const FlagRedacted: React.FC<Props> = ({ flag: { period } }) => {
  return (
    <>
      <StyledRedactedDescription>
        <RedactedDescription />
      </StyledRedactedDescription>
      <StyledPeriodSummary>
        <PeriodSummary period={period} />
      </StyledPeriodSummary>
    </>
  )
}

interface Props {
  flag: Flag
}

export default FlagRedacted
