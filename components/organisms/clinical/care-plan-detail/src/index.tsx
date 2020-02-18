/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { CarePlan } from '@ltht-react/types'
import { Card, CardHeader, CardBody } from '@ltht-react/card'
import { SubHeader } from '@ltht-react/header'
import { StringDetail, PeriodDetail, ResourceReferenceDetail } from '@ltht-react/detail'

const CarePlanDetail: React.FC<Props> = ({ title, carePlan }) => {
  return (
    <Card>
      <CardHeader>
        <SubHeader>{title}</SubHeader>
      </CardHeader>
      <CardBody>
        <StringDetail term="Plan" description={carePlan.title} />
        <StringDetail term="Description" description={carePlan.description} />
        <PeriodDetail period={carePlan.period} />
        <StringDetail term="Inent" description={carePlan.intent.toString()} />
        <StringDetail term="Status" description={carePlan.status.toString()} />
        <StringDetail term="Narrative" description={carePlan.text?.text} />
        {carePlan?.author?.map(item => {
          return <ResourceReferenceDetail term="Author(s)" resourceReference={item} />
        })}
      </CardBody>
    </Card>
  )
}

interface Props {
  title: string
  carePlan: CarePlan
}

export default CarePlanDetail
