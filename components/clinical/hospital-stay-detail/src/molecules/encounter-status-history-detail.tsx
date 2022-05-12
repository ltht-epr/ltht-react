import styled from '@emotion/styled'
import { EncounterStatusHistory, Maybe } from '@ltht-react/types'
import DescriptionList from '@ltht-react/description-list'
import { DetailViewComponent, IDetailViewProps, NestedListDetail } from '@ltht-react/type-detail'
import { periodSummaryText, titleCase } from '@ltht-react/utils'

const StyledNestedList = styled.div`
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`

const StyledListItem = styled.li`
  list-style: initial;
`

const term = 'Status History'

const EncounterStatusHistoryDetail: DetailViewComponent<IProps> = ({ hospitalStatusHistories, showIfEmpty = true }) => (
  <NestedListDetail term={term} showIfEmpty={showIfEmpty}>
    {hospitalStatusHistories &&
      hospitalStatusHistories.length > 0 &&
      hospitalStatusHistories.map((item) => {
        if (item?.status) {
          return (
            <StyledNestedList key={item.status}>
              <StyledListItem>
                {titleCase(item?.status)} - {periodSummaryText(item?.period)}
              </StyledListItem>
            </StyledNestedList>
          )
        }
        return (
          <StyledNestedList>
            <DescriptionList.Description>{periodSummaryText(item?.period)}</DescriptionList.Description>
          </StyledNestedList>
        )
      })}
  </NestedListDetail>
)

interface IProps extends IDetailViewProps {
  hospitalStatusHistories?: Maybe<Array<Maybe<EncounterStatusHistory>>>
}

export default EncounterStatusHistoryDetail
