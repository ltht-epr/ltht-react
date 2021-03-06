import { FC } from 'react'
import { AllergyIntolerance } from '@ltht-react/types'
import { CodeableConceptDetail, DatetimeDetail, ResourceReferenceDetail, StringDetail } from '@ltht-react/detail'

const AllergyDetail: FC<Props> = ({ allergy }) => (
  <>
    <ResourceReferenceDetail term="Asserter" resourceReference={allergy?.asserter} />
    <DatetimeDetail term="Asserted Date" datetime={allergy?.assertedDate} />
    <CodeableConceptDetail term="Code" concept={allergy?.code} />
    <StringDetail term="Category" description={allergy?.category?.toString()} />
  </>
)

interface Props {
  allergy: AllergyIntolerance
}

export default AllergyDetail
