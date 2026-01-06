import styled from '@emotion/styled'
import { Button } from '@ltht-react/button'
import { Maybe, RequestGroupAction } from '@ltht-react/types'
import { FC } from 'react'
import { TABLE_COLOURS } from '@ltht-react/styles'
import GuidanceActionTypeIcon from '../atoms/guidance-action-icon'

const ActionCell = styled.div`
  padding: 0.5rem;
  border: 1px solid ${TABLE_COLOURS.BORDER};
  width: fit-content;
`

const GuidanceActionCell: FC<Props> = ({ actions, onActionClick }) =>
  actions?.map(
    (action) =>
      action && (
        <ActionCell>
          <Button
            styling={{ buttonStyle: 'standard' }}
            key={action?.elementId}
            type="button"
            onClick={() => action && onActionClick(action)}
          >
            <GuidanceActionTypeIcon action={action} /> {action?.title}
          </Button>
        </ActionCell>
      )
  )

interface Props {
  actions: Maybe<RequestGroupAction>[]
  onActionClick: (action: RequestGroupAction) => void
}

export default GuidanceActionCell
