/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { AllergyIntolerance } from '@ltht-react/types'
import { Widget, WidgetHeader, WidgetBody } from '@ltht-react/widget'
import SubHeader from '@ltht-react/sub-header'
import DescriptionListCodeableConcept from '@ltht-react/description-list-codeable-concept'
import DescriptionListResourceReference from '@ltht-react/description-list-resource-reference'
import DescriptionListString from '@ltht-react/description-list-string'
import DescriptionListDatetime from '@ltht-react/description-list-datetime'

const AllergyDetail: React.FC<Props> = ({ title, allergy }) => {
  return (
    <Widget>
      <WidgetHeader>
        <SubHeader>{title}</SubHeader>
      </WidgetHeader>
      <WidgetBody>
        <DescriptionListResourceReference term="Asserter" resourceReference={allergy?.asserter} />
        <DescriptionListDatetime term="Asserted Date" datetime={allergy?.assertedDate} />
        <DescriptionListCodeableConcept term="Code" concept={allergy?.code} />
        <DescriptionListString term="Category" description={allergy?.category?.toString()} />
      </WidgetBody>
    </Widget>
  )
}

interface Props {
  title?: string
  allergy: AllergyIntolerance
}

export default AllergyDetail
