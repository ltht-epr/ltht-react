import { Narrative } from '@ltht-react/types'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'
import NestedListDetail from './nested-list-detail'

const NarrativeDetail: DetailViewComponent<IProps> = ({ narrative, showIfEmpty = false }) => {
  if ((narrative && narrative.text.length > 0) || showIfEmpty === true) {
    return (
      <NestedListDetail term="Text" showIfEmpty={showIfEmpty}>
        {narrative?.text}
      </NestedListDetail>
    )
  }
  return <></>
}

interface IProps extends IDetailViewProps {
  narrative?: Narrative | null
}

export default NarrativeDetail
