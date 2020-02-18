/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { Flag } from '@ltht-react/types'
import { Card, CardHeader, CardBody } from '@ltht-react/card'
import { SubHeader } from '@ltht-react/header'
import {
  CodeableConceptDetail,
  StringDetail,
  PeriodDetail,
  NarrativeDetail,
  ResourceReferenceDetail,
} from '@ltht-react/detail'

const FlagDetail: React.FC<Props> = ({ title, flag }) => {
  return (
    <Card>
      <CardHeader>
        <SubHeader>{title}</SubHeader>
      </CardHeader>
      <CardBody>
        <CodeableConceptDetail term="Code" concept={flag?.code} />
        <StringDetail term="Status" description={flag.status.toString()} />
        <CodeableConceptDetail term="Category" concept={flag?.category} />
        <PeriodDetail period={flag?.period} />
        <NarrativeDetail narrative={flag?.text} />
        <ResourceReferenceDetail term="Author" resourceReference={flag?.author} />
      </CardBody>
    </Card>
  )
}

interface Props {
  title?: string
  flag: Flag
}

export default FlagDetail
