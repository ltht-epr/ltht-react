import { FC } from 'react'
import DescriptionList from '@ltht-react/description-list'
import { Coding, Maybe } from '@ltht-react/types'

const CodingListDetail: FC<Props> = ({ term, codings }) => {
  if (codings && codings.length > 0) {
    return (
      <DescriptionList>
        <DescriptionList.Term>{term}</DescriptionList.Term>
        {codings?.map((coding, index) => {
          if (coding?.display) {
            return <DescriptionList.Description key={`${term}-${index}`}>{coding.display}</DescriptionList.Description>
          }

          return <></>
        })}
      </DescriptionList>
    )
  }
  return <></>
}

interface Props {
  term: string
  codings?: Maybe<Coding>[]
}

export default CodingListDetail
