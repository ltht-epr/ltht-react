import { Identifier, Maybe } from '@ltht-react/types'
import {
  StringDetail,
  PeriodDetail,
  CodeableConceptDetail,
  ResourceReferenceDetail,
  NestedListDetail,
} from '../molecules'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'

const IdentifierDetail: DetailViewComponent<IProps> = ({ term, identifier, showIfEmpty = true }) => {
  if (identifier || showIfEmpty === true) {
    return (
      <NestedListDetail term={term} showIfEmpty={showIfEmpty}>
        {(identifier || showIfEmpty === true) && (
          <>
            <StringDetail term="Use" description={identifier?.use} showIfEmpty={showIfEmpty} />
            <CodeableConceptDetail term="Type" concept={identifier?.type} showIfEmpty={showIfEmpty} />
            <ResourceReferenceDetail
              term="Assigner"
              resourceReference={identifier?.assigner}
              showIfEmpty={showIfEmpty}
            />
            <PeriodDetail period={identifier?.period} showIfEmpty={showIfEmpty} />
          </>
        )}
      </NestedListDetail>
    )
  }
  return <></>
}

interface IProps extends IDetailViewProps {
  term: string
  identifier?: Maybe<Identifier> | null
}

export default IdentifierDetail
