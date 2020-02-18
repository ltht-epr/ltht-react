/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { AllergyIntolerance } from '@ltht-react/types'
import { Card, CardHeader, CardBody } from '@ltht-react/card'
import SubHeader from '@ltht-react/sub-header'
import CodeableConceptDetail from '@ltht-react/codeable-concept-detail'
import ResourceReferenceDetail from '@ltht-react/resource-reference-detail'
import StringDetail from '@ltht-react/string-detail'
import DatetimeDetail from '@ltht-react/datetime-detail'

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
