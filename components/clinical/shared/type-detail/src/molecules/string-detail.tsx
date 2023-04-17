import { titleCase } from '@ltht-react/utils'
import ReactHtmlParser from 'react-html-parser'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'
import NestedListDetail from './nested-list-detail'

const StringDetail: DetailViewComponent<IProps> = ({ term, description, showIfEmpty, parse = true }) => {
  if (description || showIfEmpty) {
    if (parse) {
      return (
        <NestedListDetail
          term={term}
          className={(description ?? '').length > 150 ? 'string-detail--full-width' : 'string-detail'}
        >
          {ReactHtmlParser(titleCase(description ?? ''))}
        </NestedListDetail>
      )
    }
    return (
      <NestedListDetail
        term={term}
        className={(description ?? '').length > 150 ? 'string-detail--full-width' : 'string-detail'}
      >
        {description ?? ''}
      </NestedListDetail>
    )
  }
  return <></>
}

interface IProps extends IDetailViewProps {
  term: string
  description?: string | null
  parse?: boolean
}

export default StringDetail
