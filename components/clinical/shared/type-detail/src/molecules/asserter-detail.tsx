import { ConditionAsserter, Maybe } from '@ltht-react/types'
import { NestedListDetail } from '.'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'

const AsserterDetail: DetailViewComponent<IAsserterDetailProps> = ({ asserter, showIfEmpty = false }) => (
  <>
    {(asserter || showIfEmpty) && (
      <>
        <NestedListDetail term="Diagnosis Stated By" showIfEmpty={showIfEmpty}>
          {asserter?.asserterName}
        </NestedListDetail>
        <NestedListDetail term="Relationship" showIfEmpty={showIfEmpty}>
          {asserter?.asserterType}
        </NestedListDetail>
        <NestedListDetail term="Practitioner Address/Organisation" showIfEmpty={showIfEmpty}>
          {asserter?.asserterAddress}
        </NestedListDetail>
      </>
    )}
  </>
)

interface IAsserterDetailProps extends IDetailViewProps {
  asserter?: Maybe<ConditionAsserter> | null
}

export default AsserterDetail
