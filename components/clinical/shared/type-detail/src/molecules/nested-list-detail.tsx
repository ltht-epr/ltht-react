import DescriptionList from '@ltht-react/description-list'
import { Maybe } from '@ltht-react/types'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'

const NestedListDetail: DetailViewComponent<INestedListDetailProps> = ({
  term,
  children,
  wrapDescription = true,
  showIfEmpty = false,
}) =>
  children || showIfEmpty === true ? (
    <DescriptionList>
      {(children || showIfEmpty === true) && <DescriptionList.Term>{term}</DescriptionList.Term>}
      {(children || showIfEmpty === true) && wrapDescription === true && (
        <DescriptionList.Description>{children}</DescriptionList.Description>
      )}
      {(children || showIfEmpty === true) && wrapDescription === false && <>{children}</>}
    </DescriptionList>
  ) : (
    <></>
  )

interface INestedListDetailProps extends IDetailViewProps {
  term: string
  wrapDescription?: Maybe<boolean>
}

export default NestedListDetail
