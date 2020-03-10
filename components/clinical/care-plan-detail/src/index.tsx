/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { CarePlan } from '@ltht-react/types'
import { Card, CardHeader, CardBody } from '@ltht-react/card'
import { SubHeader } from '@ltht-react/header'
import { StringDetail, PeriodDetail, NarrativeDetail, ResourceReferenceListDetail } from '@ltht-react/detail'

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
        <StringDetail term="Intent" description={carePlan.intent.toString()} />
        <StringDetail term="Status" description={carePlan.status.toString()} />
        <NarrativeDetail narrative={carePlan.text} />
        <ResourceReferenceListDetail term="Addresses" resourceReferences={carePlan?.addresses} />
        <ResourceReferenceListDetail term="Performer(s)" resourceReferences={carePlan?.activity?.detail?.performer} />
        <ResourceReferenceListDetail term="Author(s)" resourceReferences={carePlan?.author} />
      </CardBody>
    </Card>
  )
}

interface Props {
  title: string
  carePlan: CarePlan
}

export default CarePlanDetail
