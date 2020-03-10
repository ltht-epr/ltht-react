/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { AllergyIntolerance } from '@ltht-react/types'
import { Card, CardHeader, CardBody } from '@ltht-react/card'
import { SubHeader } from '@ltht-react/header'
import { CodeableConceptDetail, DatetimeDetail, ResourceReferenceDetail, StringDetail } from '@ltht-react/detail'

const AllergyDetail: React.FC<Props> = ({ title, allergy }) => {
  return (
    <Card>
      <CardHeader>
        <SubHeader>{title}</SubHeader>
      </CardHeader>
      <CardBody>
        <ResourceReferenceDetail term="Asserter" resourceReference={allergy?.asserter} />
        <DatetimeDetail term="Asserted Date" datetime={allergy?.assertedDate} />
        <CodeableConceptDetail term="Code" concept={allergy?.code} />
        <StringDetail term="Category" description={allergy?.category?.toString()} />
      </CardBody>
    </Card>
  )
}

interface Props {
  title?: string
  allergy: AllergyIntolerance
}

export default AllergyDetail
