import { FC } from 'react'
import { DetailViewType, Flag } from '@ltht-react/types'
import { getStringExtension } from '@ltht-react/utils'

import {
  CodeableConceptDetail,
  StringDetail,
  PeriodDetail,
  NarrativeDetail,
  ResourceReferenceDetail,
  CollapsibleDetailCollectionProps,
  CollapsibleDetailCollection,
} from '@ltht-react/type-detail'

const FlagDetail: FC<Props> = ({ flag, viewType = DetailViewType.Compact }) => (
  <CollapsibleDetailCollection viewType={viewType}>
    <CodeableConceptDetail term="Code" concept={flag?.code} />
    <StringDetail term="Status" description={flag.status.toString()} />
    <CodeableConceptDetail term="Category" concept={flag?.category} />
    <PeriodDetail period={flag?.period} />
    <NarrativeDetail narrative={flag?.text} />
    <StringDetail
      term="Advice"
      description={getStringExtension(flag?.extension, 'https://leedsth.nhs.uk/alert/advice')}
      parse={false}
    />
    <ResourceReferenceDetail term="Author" resourceReference={flag?.author} />
  </CollapsibleDetailCollection>
)

interface Props extends CollapsibleDetailCollectionProps {
  flag: Flag
}

export default FlagDetail
