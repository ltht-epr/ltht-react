import { FC } from 'react'
import styled from '@emotion/styled'
import { Maybe, EncounterParticipant, Scalars } from '@ltht-react/types'
import { periodSummaryText, titleCase } from '@ltht-react/utils'

import { NestedListDetail } from '@ltht-react/type-detail'

const StyledNestedList = styled.div`
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`

const StyledListItem = styled.li`
  list-style: initial;
`

const term = 'Participant(s)'

const EncounterParticipantDetail: FC<Props> = ({ participants, showIfEmpty = true }) => {
  if (participants && participants.length > 0) {
    return (
      <NestedListDetail term={term}>
        {participants.map((item) => {
          if (item?.individual?.display && item?.individual?.typeName) {
            return (
              <StyledNestedList key={item.individual.display}>
                <StyledListItem>
                  {titleCase(item?.individual?.display)} ({titleCase(item?.individual?.typeName)}):{' '}
                  {periodSummaryText(item?.period)}
                </StyledListItem>
              </StyledNestedList>
            )
          }

          return <></>
        })}
      </NestedListDetail>
    )
  }

  if (showIfEmpty === true) {
    return <NestedListDetail term={term} />
  }
  return <></>
}

interface Props {
  participants?: Maybe<Array<Maybe<EncounterParticipant>>>
  showIfEmpty?: Maybe<Scalars['Boolean']>
}

export default EncounterParticipantDetail
