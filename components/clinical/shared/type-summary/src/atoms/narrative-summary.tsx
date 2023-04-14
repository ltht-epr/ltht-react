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
const NarrativeSummary: FC<Props> = ({ narrative, showIfEmpty = false, truncate = true, ...rest }) => {
  if ((narrative && narrative.text.length > 0) || showIfEmpty === true) {
    if (truncate) {
      return <StyledNarrativeTruncatedSummary {...rest}>{narrative?.text}</StyledNarrativeTruncatedSummary>
    }

    return <StyledNarrativeSummary {...rest}>{narrative?.text}</StyledNarrativeSummary>
  }

  return <></>
}

interface Props {
  narrative: Narrative | null | undefined
  showIfEmpty: boolean
  truncate: boolean
}

export default NarrativeSummary
