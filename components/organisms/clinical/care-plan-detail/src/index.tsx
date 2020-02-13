/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { CarePlan } from '@ltht-react/types'
import { Widget, WidgetHeader, WidgetBody } from '@ltht-react/widget'
import SubHeader from '@ltht-react/sub-header'
import DescriptionListResourceReference from '@ltht-react/description-list-resource-reference'
import DescriptionListString from '@ltht-react/description-list-string'
import DescriptionListPeriod from '@ltht-react/description-list-period'

const CarePlanDetail: React.FC<Props> = ({ title, carePlan }) => {
  return (
    <Widget>
      <WidgetHeader>
        <SubHeader>{title}</SubHeader>
      </WidgetHeader>
      <WidgetBody>
        <DescriptionListString term="Plan" description={carePlan.title} />
        <DescriptionListString term="Description" description={carePlan.description} />
        <DescriptionListPeriod period={carePlan.period} />
        <DescriptionListString term="Inent" description={carePlan.intent.toString()} />
        <DescriptionListString term="Status" description={carePlan.status.toString()} />
        <DescriptionListString term="Narrative" description={carePlan.text?.text} />
        {carePlan?.author?.map(item => {
          return <DescriptionListResourceReference term="Author(s)" resourceReference={item} />
        })}
      </WidgetBody>
    </Widget>
  )
}

interface Props {
  title: string
  carePlan: CarePlan
}

export default CarePlanDetail
