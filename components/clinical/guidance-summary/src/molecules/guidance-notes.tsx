import { Guidance, RequestGroupAction } from '@ltht-react/types'
import { FC } from 'react'
import styled from '@emotion/styled'
import GuidanceNoteCell from '../atoms/guidance-note-cell'
import GuidanceActionCell from './guidance-action-cell'

const StyledRow = styled.div`
  display: flex;
`

const GuidanceNotes: FC<Props> = ({ guidance, onActionClick }) =>
  guidance.note?.map((note) => {
    const actions = guidance.result?.action?.filter((x) => x?.elementId === note?.elementId)
    return (
      !!note && (
        <StyledRow>
          <GuidanceNoteCell note={note} />
          {!!onActionClick && !!actions && <GuidanceActionCell actions={actions} onActionClick={onActionClick} />}
        </StyledRow>
      )
    )
  })

interface Props {
  guidance: Guidance
  onActionClick?: (action: RequestGroupAction) => void
}

export default GuidanceNotes
