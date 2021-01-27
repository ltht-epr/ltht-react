import React from 'react'
import styled from '@emotion/styled'
import { EncounterStatusHistory, Maybe } from '@ltht-react/types'
import DescriptionList from '@ltht-react/description-list'
import { NestedListDetail } from '@ltht-react/detail'
import { periodSummaryText, titleCase } from '@ltht-react/utils'

const StyledNestedList = styled.div`
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`

const StyledListItem = styled.li`
  list-style: initial;
`

const EncounterStatusHistoryDetail: React.FC<Props> = ({ hospitalStatusHistories }) => (
  <NestedListDetail term="Status History">
    {hospitalStatusHistories?.map(item => {
      if (item?.status) {
        return (
          <StyledNestedList>
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

interface Props {
  hospitalStatusHistories?: Maybe<Array<Maybe<EncounterStatusHistory>>>
}

export default EncounterStatusHistoryDetail
