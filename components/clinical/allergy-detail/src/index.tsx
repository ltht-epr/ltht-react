/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { AllergyIntolerance } from '@ltht-react/types'
import { CodeableConceptDetail, DatetimeDetail, ResourceReferenceDetail, StringDetail } from '@ltht-react/detail'

const AllergyDetail: React.FC<Props> = ({ allergy }) => {
  return (
    <React.Fragment>
      <ResourceReferenceDetail term="Asserter" resourceReference={allergy?.asserter} />
      <DatetimeDetail term="Asserted Date" datetime={allergy?.assertedDate} />
      <CodeableConceptDetail term="Code" concept={allergy?.code} />
      <StringDetail term="Category" description={allergy?.category?.toString()} />
    </React.Fragment>
  )
}

interface Props {
  allergy: AllergyIntolerance
}

export default AllergyDetail
