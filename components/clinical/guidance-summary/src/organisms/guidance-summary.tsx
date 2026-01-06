import { FC } from 'react'
import styled from '@emotion/styled'
import Card from '@ltht-react/card'
import { Guidance, RequestGroupAction } from '@ltht-react/types'

import { TABLE_COLOURS, TRANSLUCENT_DARK_BLUE } from '@ltht-react/styles'

import Redacted from '../molecules/guidance-redacted'
import GuidanceNotes from '../molecules/guidance-notes'

const StyledCardHeader = styled(Card.Header)`
  padding: 0.5rem;
  background: ${TRANSLUCENT_DARK_BLUE};
  border: 1px solid ${TABLE_COLOURS.BORDER};
  margin: 0;
`

const BoldCardText = styled(Card.Text)`
  font-weight: bold;
`

const GuidanceSummaryV2: FC<Props> = ({ guidance, onActionClick }) => {
  if (guidance.metadata.isRedacted) {
    return <Redacted />
  }

  return (
    <Card>
      <StyledCardHeader>
        <Card.Title>{guidance.reasonCode?.text}</Card.Title>
      </StyledCardHeader>
      <Card.Body>
        <BoldCardText> {guidance.text?.text} </BoldCardText>
        {!!guidance.note && <GuidanceNotes guidance={guidance} onActionClick={onActionClick} />}
      </Card.Body>
    </Card>
  )
}

interface Props {
  guidance: Guidance
  onActionClick?: (action: RequestGroupAction) => void
}

export default GuidanceSummaryV2
