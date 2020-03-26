/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { Flag } from '@ltht-react/types'
import {
  CodeableConceptDetail,
  StringDetail,
  PeriodDetail,
  NarrativeDetail,
  ResourceReferenceDetail,
} from '@ltht-react/detail'

const FlagDetail: React.FC<Props> = ({ flag }) => {
  return (
    <React.Fragment>
      <CodeableConceptDetail term="Code" concept={flag?.code} />
      <StringDetail term="Status" description={flag.status.toString()} />
      <CodeableConceptDetail term="Category" concept={flag?.category} />
      <PeriodDetail period={flag?.period} />
      <NarrativeDetail narrative={flag?.text} />
      <ResourceReferenceDetail term="Author" resourceReference={flag?.author} />
    </React.Fragment>
  )
}

interface Props {
  flag: Flag
}

export default FlagDetail
