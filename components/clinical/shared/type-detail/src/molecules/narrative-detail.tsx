import { FC } from 'react'
import { Maybe, Narrative, Scalars } from '@ltht-react/types'
import DescriptionList from '@ltht-react/description-list'

const NarrativeDetail: FC<Props> = ({ narrative, showIfEmpty = false }) => {
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

interface Props {
  narrative?: Narrative | null
  showIfEmpty?: Maybe<Scalars['Boolean']>
}

export default NarrativeDetail
