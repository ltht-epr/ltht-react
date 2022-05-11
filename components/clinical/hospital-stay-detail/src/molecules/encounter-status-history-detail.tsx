import { FC } from 'react'
import styled from '@emotion/styled'
import { EncounterStatusHistory, Maybe } from '@ltht-react/types'
import DescriptionList from '@ltht-react/description-list'
import { IDetailViewProps, NestedListDetail } from '@ltht-react/type-detail'
import { periodSummaryText, titleCase } from '@ltht-react/utils'

const StyledNestedList = styled.div`
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`

const StyledListItem = styled.li`
  list-style: initial;
`

const term = 'Status History'

const EncounterStatusHistoryDetail: FC<Props> = ({ hospitalStatusHistories, showIfEmpty = true }) => {
  if (hospitalStatusHistories && hospitalStatusHistories.length > 0)
    return (
      <NestedListDetail term={term} showIfEmpty={showIfEmpty}>
        {hospitalStatusHistories?.map((item) => {
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
  if (showIfEmpty === true) {
    return <NestedListDetail term={term} />
  }
  return <></>
}

interface Props extends IDetailViewProps {
  hospitalStatusHistories?: Maybe<Array<Maybe<EncounterStatusHistory>>>
}

export default EncounterStatusHistoryDetail
