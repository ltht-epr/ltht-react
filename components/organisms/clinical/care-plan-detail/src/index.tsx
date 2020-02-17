/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { CarePlan } from '@ltht-react/types'
import { Widget, WidgetHeader, WidgetBody } from '@ltht-react/widget'
import SubHeader from '@ltht-react/sub-header'
import PeriodDetail from '@ltht-react/period-detail'
import ResourceReferenceDetail from '@ltht-react/resource-reference-detail'
import StringDetail from '@ltht-react/string-detail'

const CarePlanDetail: React.FC<Props> = ({ title, carePlan }) => {
  return (
    <Widget>
      <WidgetHeader>
        <SubHeader>{title}</SubHeader>
      </WidgetHeader>
      <WidgetBody>
        <StringDetail term="Plan" description={carePlan.title} />
        <StringDetail term="Description" description={carePlan.description} />
        <PeriodDetail period={carePlan.period} />
        <StringDetail term="Inent" description={carePlan.intent.toString()} />
        <StringDetail term="Status" description={carePlan.status.toString()} />
        <StringDetail term="Narrative" description={carePlan.text?.text} />
        {carePlan?.author?.map(item => {
          return <ResourceReferenceDetail term="Author(s)" resourceReference={item} />
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
