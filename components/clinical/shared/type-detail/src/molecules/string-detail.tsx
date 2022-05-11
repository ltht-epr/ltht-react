import { titleCase } from '@ltht-react/utils'
import DescriptionList from '@ltht-react/description-list'
import ReactHtmlParser from 'react-html-parser'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-props'

const StringDetail: DetailViewComponent<IProps> = ({ term, description, showIfEmpty }) => {
  if (description || showIfEmpty) {
    return (
      <DescriptionList>
        <DescriptionList.Term>{term}</DescriptionList.Term>
        <DescriptionList.Description>{ReactHtmlParser(titleCase(description ?? ''))}</DescriptionList.Description>
      </DescriptionList>
    )
  }
  return <></>
}

interface IProps extends IDetailViewProps {
  term: string
  description?: string | null
}

export default StringDetail
