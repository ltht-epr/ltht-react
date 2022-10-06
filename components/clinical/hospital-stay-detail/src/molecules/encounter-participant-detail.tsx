import styled from '@emotion/styled'
import { Maybe, EncounterParticipant } from '@ltht-react/types'
import { periodSummaryText, titleCase } from '@ltht-react/utils'

import { DetailViewComponent, IDetailViewProps, NestedListDetail } from '@ltht-react/type-detail'

const StyledNestedList = styled.div`
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`

const StyledListItem = styled.li`
  list-style: initial;
`

const term = 'Participant(s)'

const EncounterParticipantDetail: DetailViewComponent<IProps> = ({ participants, showIfEmpty = true }) => (
  <NestedListDetail term={term} showIfEmpty={showIfEmpty}>
    {participants &&
      participants.length > 0 &&
      participants.map((item) => {
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

interface IProps extends IDetailViewProps {
  participants?: Maybe<Array<Maybe<EncounterParticipant>>>
}

export default EncounterParticipantDetail
