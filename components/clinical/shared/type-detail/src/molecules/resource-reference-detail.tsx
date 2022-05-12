import { ResourceReference } from '@ltht-react/types'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'
import NestedListDetail from './nested-list-detail'

const ResourceReferenceDetail: DetailViewComponent<IProps> = ({ term, resourceReference, showIfEmpty }) => (
  <NestedListDetail term={term || resourceReference?.typeName || ''} showIfEmpty={showIfEmpty}>
    {resourceReference?.display}
  </NestedListDetail>
)

interface IProps extends IDetailViewProps {
  term?: string | null
  resourceReference?: ResourceReference | null
}

export default ResourceReferenceDetail
