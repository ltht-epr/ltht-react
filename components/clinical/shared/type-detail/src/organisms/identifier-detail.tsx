import { FC } from 'react'
import { Identifier, Maybe, Scalars } from '@ltht-react/types'
import {
  StringDetail,
  PeriodDetail,
  CodeableConceptDetail,
  ResourceReferenceDetail,
  NestedListDetail,
} from '../molecules'

const IdentifierDetail: FC<Props> = ({ term, identifier, showIfEmpty = true }) => {
  if (identifier || showIfEmpty === true) {
    return (
      <NestedListDetail term={term}>
        <StringDetail term="Use" description={identifier?.use} showIfEmpty={showIfEmpty} />
        <CodeableConceptDetail term="Type" concept={identifier?.type} showIfEmpty={showIfEmpty} />
        <ResourceReferenceDetail term="Assigner" resourceReference={identifier?.assigner} showIfEmpty={showIfEmpty} />
        <PeriodDetail period={identifier?.period} showIfEmpty={showIfEmpty} />
      </NestedListDetail>
    )
  }
  return <></>
}

interface Props {
  term: string
  identifier?: Maybe<Identifier> | null
  showIfEmpty?: Maybe<Scalars['Boolean']>
}

export default IdentifierDetail
