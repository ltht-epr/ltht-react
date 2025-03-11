import { Narrative } from '@ltht-react/types'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'
import NestedListDetail from './nested-list-detail'

const NarrativeDetail: DetailViewComponent<IProps> = ({ term, narrative, showIfEmpty = false }) => {
  if ((narrative && narrative.text.length > 0) || showIfEmpty === true) {
    return (
      <NestedListDetail
        term={term || 'Text'}
        showIfEmpty={showIfEmpty}
        className={(narrative?.text ?? '').length > 150 ? 'narrative-detail--full-width' : 'narrative-detail'}
      >
        {narrative?.text}
      </NestedListDetail>
    )
  }
  return <></>
}

interface IProps extends IDetailViewProps {
  term?: string
  narrative?: Narrative | null
}

export default NarrativeDetail
