import { FC } from 'react'
import styled from '@emotion/styled'
import { Maybe, EncounterParticipant } from '@ltht-react/types'
import { periodSummaryText, titleCase } from '@ltht-react/utils'

import { NestedListDetail } from '@ltht-react/type-detail'

const StyledNestedList = styled.div`
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`

const StyledListItem = styled.li`
  list-style: initial;
`

const EncounterParticipantDetail: FC<Props> = ({ participants }) => (
  <NestedListDetail term="Participant(s)">
    {participants?.map((item) => {
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

interface Props {
  participants?: Maybe<Array<Maybe<EncounterParticipant>>>
}

export default EncounterParticipantDetail
