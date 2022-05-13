import { titleCase } from '@ltht-react/utils'
import ReactHtmlParser from 'react-html-parser'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'
import NestedListDetail from './nested-list-detail'

const StringDetail: DetailViewComponent<IProps> = ({ term, description, showIfEmpty }) => {
  if (description || showIfEmpty) {
    return <NestedListDetail term={term}>{ReactHtmlParser(titleCase(description ?? ''))}</NestedListDetail>
  }
  return <></>
}

interface IProps extends IDetailViewProps {
  term: string
  description?: string | null
}

export default StringDetail
