import { FC } from 'react'
import { Narrative } from '@ltht-react/types'
import DescriptionList from '@ltht-react/description-list'

const NarrativeDetail: FC<Props> = ({ narrative }) => {
  if (narrative) {
    if (narrative.text.length > 0) {
      return (
        <DescriptionList>
          <DescriptionList.Term>Text</DescriptionList.Term>
          <DescriptionList.Description>{narrative.text}</DescriptionList.Description>
        </DescriptionList>
      )
    }
  }
  return <></>
}

interface Props {
  narrative?: Narrative | null
}

export default NarrativeDetail
