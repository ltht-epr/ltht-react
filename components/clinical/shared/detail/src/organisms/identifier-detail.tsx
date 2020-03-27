import React from 'react'
import { Identifier, Maybe } from '@ltht-react/types'
import {
  StringDetail,
  PeriodDetail,
  CodeableConceptDetail,
  ResourceReferenceDetail,
  NestedListDetail,
} from '../molecules'

const IdentifierDetail: React.FC<Props> = ({ term, identifier }) => {
  if (identifier) {
    return (
      <NestedListDetail term={term}>
        <StringDetail term="Use" description={identifier?.use} />
        <CodeableConceptDetail term="Type" concept={identifier?.type} />
        <ResourceReferenceDetail term="Assigner" resourceReference={identifier?.assigner} />
        <PeriodDetail period={identifier?.period} />
      </NestedListDetail>
    )
  }
  return <></>
}

interface Props {
  term: string
  identifier?: Maybe<Identifier> | null
}

export default IdentifierDetail
