/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { Flag } from '@ltht-react/types'
import { Widget, WidgetHeader, WidgetBody } from '@ltht-react/widget'
import SubHeader from '@ltht-react/sub-header'
import CodeableConceptDetail from '@ltht-react/codeable-concept-detail'
import NarrativeDetail from '@ltht-react/narrative-detail'
import ResourceReferenceDetail from '@ltht-react/resource-reference-detail'
import StringDetail from '@ltht-react/string-detail'
import PeriodDetail from '@ltht-react/period-detail'

const FlagDetail: React.FC<Props> = ({ title, flag }) => {
  return (
    <Widget>
      <WidgetHeader>
        <SubHeader>{title}</SubHeader>
      </WidgetHeader>
      <WidgetBody>
        <CodeableConceptDetail term="Code" concept={flag?.code} />
        <StringDetail term="Status" description={flag.status.toString()} />
        <CodeableConceptDetail term="Category" concept={flag?.category} />
        <PeriodDetail period={flag?.period} />
        <NarrativeDetail narrative={flag?.text} />
        <ResourceReferenceDetail term="Author" resourceReference={flag?.author} />
      </WidgetBody>
    </Widget>
  )
}

interface Props {
  title?: string
  flag: Flag
}

export default FlagDetail
