/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
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

const FlagSummary: React.FC<Props> = ({ flag }) => {
  if (flag.metadata.isRedacted) {
    return (
      <StyledSummary>
        <Redacted flag={flag} />
      </StyledSummary>
    )
  }

  return (
    <StyledSummary>
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

interface Props {
  flag: Flag
}

export default FlagSummary
