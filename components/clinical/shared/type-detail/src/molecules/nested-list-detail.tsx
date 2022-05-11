import DescriptionList from '@ltht-react/description-list'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-props'

const NestedListDetail: DetailViewComponent<IProps> = ({ term, children, showIfEmpty = true }) => (
  <DescriptionList>
    {(children || showIfEmpty === true) && <DescriptionList.Term>{term}</DescriptionList.Term>}
    {(children || showIfEmpty === true) && <DescriptionList.Description>{children}</DescriptionList.Description>}
  </DescriptionList>
)

interface IProps extends IDetailViewProps {
  term: string
}

export default NestedListDetail
