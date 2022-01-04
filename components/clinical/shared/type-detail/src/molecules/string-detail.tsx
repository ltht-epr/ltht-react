import { FC } from 'react'
import { titleCase } from '@ltht-react/utils'
import DescriptionList from '@ltht-react/description-list'

const StringDetail: FC<Props> = ({ term, description }) => {
  if (description) {
    return (
      <DescriptionList>
        <DescriptionList.Term>{term}</DescriptionList.Term>
        <DescriptionList.Description>{titleCase(description)}</DescriptionList.Description>
      </DescriptionList>
    )
  }
  return <></>
}

interface Props {
  term: string
  description?: string | null
}

export default StringDetail
