import React from 'react'

import { Guidance } from '@ltht-react/types'
import { UnorderedList, ListItem } from '@ltht-react/list'

const GuidanceDetail: React.FC<Props> = ({ guidance = undefined }) => {
  if (!guidance) {
    return null
  }

  return (
    <UnorderedList>
      {guidance?.note?.map(n => (
        <ListItem>{n?.text}</ListItem>
      ))}
    </UnorderedList>
  )
}

interface Props {
  guidance: Guidance
}

export default GuidanceDetail
