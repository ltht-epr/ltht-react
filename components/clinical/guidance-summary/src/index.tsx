import React from 'react'

import { GuidanceList } from '@ltht-react/types'
import { UnorderedList } from '@ltht-react/list'
import GuidanceItem from './guidance-item'

const GuidanceSummary: React.FC<Props> = ({ guidanceList = undefined }) => {
  if (!guidanceList?.guidance) {
    return null
  }

  return (
    <UnorderedList>
      {guidanceList.guidance.map(x => (
        <GuidanceItem guidance={x} />
      ))}
    </UnorderedList>
  )
}

interface Props {
  guidanceList: GuidanceList | undefined
}

export default GuidanceSummary
