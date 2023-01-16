import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'
import { Maybe, PartialDateTime, ResourceReference } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'

const StyledAuthorInfo = styled.div``

const AuthorName = styled.small`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
`

const AuthorDate = styled.small`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
`

const AuthorInfo: FC<IProps> = ({ author, authoredOn, ...rest }) => {
  if (!author && !authoredOn) return null

  return (
    <StyledAuthorInfo {...rest} role="mark">
      {author && <AuthorName>Authored By: {author.display}</AuthorName>}
      {author && authoredOn && <AuthorDate> on {partialDateTimeText(authoredOn)}</AuthorDate>}
      {!author && authoredOn && <AuthorDate>{partialDateTimeText(authoredOn)}</AuthorDate>}
    </StyledAuthorInfo>
  )
}

interface IProps extends HTMLAttributes<HTMLDivElement> {
  author?: Maybe<ResourceReference>
  authoredOn?: Maybe<PartialDateTime>
}

export default AuthorInfo
