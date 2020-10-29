/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import Styled from '@emotion/styled'
import { Guidance } from '@ltht-react/types'
import { UnorderedList, ListItem } from '@ltht-react/list'

import Redacted from '../molecules/guidance-redacted'

const StyledTitle = Styled.h4``
const StyledText = Styled.span`
  display: block;
  padding-top: 0.5rem;
  padding-bottom: ${(props: StyledProps): string => (props.hasNotes ? '0.5rem' : '0')};
`

const GuidanceSummary: React.FC<Props> = ({ guidance }) => {
  if (guidance.metadata.isRedacted) {
    return <Redacted />
  }

  return (
    <React.Fragment>
      <StyledTitle>{guidance.reasonCode?.text}</StyledTitle>
      <StyledText hasNotes={!!guidance.note}>{guidance.text?.text}</StyledText>
      <UnorderedList bullet="disc">
        {guidance.note?.map((note, index) => (
          <ListItem key={index}>{note?.text}</ListItem>
        ))}
      </UnorderedList>
    </React.Fragment>
  )
}

interface StyledProps {
  hasNotes: boolean
}

interface Props {
  guidance: Guidance
}

export default GuidanceSummary
