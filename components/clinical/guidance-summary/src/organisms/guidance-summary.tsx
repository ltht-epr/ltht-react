import { FC } from 'react'
import styled from '@emotion/styled'
import { Guidance } from '@ltht-react/types'
import { UnorderedList, ListItem } from '@ltht-react/list'

import Redacted from '../molecules/guidance-redacted'

const StyledTitle = styled.h4``

const StyledBody = styled.div``

const StyledText = styled.span`
  display: block;
  padding-top: 0.5rem;
`

const StyledUnorderedList = styled(UnorderedList)`
  padding-top: 0.5rem;
`

const GuidanceSummary: FC<Props> = ({ guidance }) => {
  if (guidance.metadata.isRedacted) {
    return <Redacted />
  }

  return (
    <>
      <StyledTitle>{guidance.reasonCode?.text}</StyledTitle>
      <StyledBody>
        <StyledText>{guidance.text?.text}</StyledText>
        {!!guidance.note && (
          <StyledUnorderedList bullet="disc">
            {guidance.note?.map((note, index) => (
              <ListItem key={index}>{note?.text}</ListItem>
            ))}
          </StyledUnorderedList>
        )}
      </StyledBody>
    </>
  )
}

interface Props {
  guidance: Guidance
}

export default GuidanceSummary
