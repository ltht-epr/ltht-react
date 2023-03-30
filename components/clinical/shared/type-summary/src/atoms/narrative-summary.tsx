import { FC } from 'react'
import styled from '@emotion/styled'
// import { TEXT_COLOURS } from '@ltht-react/styles'

import { Narrative } from '@ltht-react/types'

const StyledNarrativeSummary = styled.div``
const StyledNarrativeTruncatedSummary = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`
// TODO: Move to atoms
const NarrativeSummary: FC<Props> = ({ narrative, showIfEmpty = false, truncate = true, ...rest }) => {
  if ((narrative && narrative.text.length > 0) || showIfEmpty === true) {
    if (truncate) {
      return <StyledNarrativeTruncatedSummary {...rest}>{narrative?.text}</StyledNarrativeTruncatedSummary>
    }

    return <StyledNarrativeSummary {...rest}>{narrative?.text}</StyledNarrativeSummary>
    // return (
    //   <StyledNarrativeSummary {...rest} className={truncate ? 'TRUNCATESTYLE' : ''}>
    //     {narrative?.text} ShowIfEmpty: {showIfEmpty} Truncate: {truncate ? 'yes' : 'no'}
    //   </StyledNarrativeSummary>
    // )
  }

  return <></>

  // const NarrativeSummary: DetailViewComponent<IProps> = ({ narrative, showIfEmpty = false, truncate = true }) => {
  //   if ((narrative && narrative.text.length > 0) || showIfEmpty === true) {
  //     return (
  //       <NestedListDetail
  //         term="Text"
  //         showIfEmpty={showIfEmpty}
  //         className={(narrative?.text ?? '').length > 150 ? 'narrative-detail--full-width' : 'narrative-detail'}
  //       >
  //         {narrative?.text} Truncate: {truncate}
  //       </NestedListDetail>
  //     )
  //   }
  //   return <></>
}

interface Props {
  narrative: Narrative | null | undefined
  showIfEmpty: boolean
  truncate: boolean
}

export default NarrativeSummary
