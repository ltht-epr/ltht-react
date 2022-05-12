import { Narrative } from '@ltht-react/types'
import DescriptionList from '@ltht-react/description-list'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'

const NarrativeDetail: DetailViewComponent<IProps> = ({ narrative, showIfEmpty = false }) => {
  if ((narrative && narrative.text.length > 0) || showIfEmpty === true) {
    return (
      <DescriptionList>
        <DescriptionList.Term>Text</DescriptionList.Term>
        <DescriptionList.Description>{narrative?.text}</DescriptionList.Description>
      </DescriptionList>
    )
  }
  return <></>
}

interface IProps extends IDetailViewProps {
  narrative?: Narrative | null
}

export default NarrativeDetail
