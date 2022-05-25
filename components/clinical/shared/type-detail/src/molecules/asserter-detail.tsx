import { ConditionAsserter, Maybe } from '@ltht-react/types'
import { NestedListDetail } from '.'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'

const AsserterDetail: DetailViewComponent<IAsserterDetailProps> = ({ asserter, showIfEmpty = false }) => (
  <>
    {(asserter || showIfEmpty === true) && (
      <>
        <NestedListDetail term="Asserted By" showIfEmpty={showIfEmpty}>
          {asserter?.asserterName}
        </NestedListDetail>
        <NestedListDetail term="Asserter Relationship" showIfEmpty={showIfEmpty}>
          {asserter?.asserterType}
        </NestedListDetail>
      </>
    )}
  </>
)

interface IAsserterDetailProps extends IDetailViewProps {
  asserter?: Maybe<ConditionAsserter> | null
}

export default AsserterDetail
