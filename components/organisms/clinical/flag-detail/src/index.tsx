/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { Flag } from '@ltht-react/types'
import { Widget, WidgetHeader, WidgetBody } from '@ltht-react/widget'
import SubHeader from '@ltht-react/sub-header'
import DescriptionListCodeableConcept from '@ltht-react/description-list-codeable-concept'
import DescriptionListNarrative from '@ltht-react/description-list-narrative'
import DescriptionListResourceReference from '@ltht-react/description-list-resource-reference'
import DescriptionListString from '@ltht-react/description-list-string'
import DescriptionListPeriod from '@ltht-react/description-list-period'

const FlagDetail: React.FC<Props> = ({ title, flag }) => {
  return (
    <Widget>
      <WidgetHeader>
        <SubHeader>{title}</SubHeader>
      </WidgetHeader>
      <WidgetBody>
        <DescriptionListCodeableConcept term="Code" concept={flag?.code} />
        <DescriptionListString term="Status" description={flag.status.toString()} />
        <DescriptionListCodeableConcept term="Category" concept={flag?.category} />
        <DescriptionListPeriod period={flag?.period} />
        <DescriptionListNarrative narrative={flag?.text} />
        <DescriptionListResourceReference term="Author" resourceReference={flag?.author} />
      </WidgetBody>
    </Widget>
  )
}

interface Props {
  title?: string
  flag: Flag
}

export default FlagDetail
