import { FC } from 'react'
import styled from '@emotion/styled'
import { Annotation, Maybe } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'
import DescriptionList from '@ltht-react/description-list'

const StyledAnnotation = styled.div<IStyledAnnotation>`
  margin-bottom: ${({ isLastAnnotation }) => (isLastAnnotation ? '0' : '1.5rem')};
`

const StyledAnnotationNoteText = styled(DescriptionList.Description)`
  margin-top: 0.25rem;
`

const StyledAnnotationAuthorInfo = styled(DescriptionList.Description)`
  font-weight: bold;
`

const AnnotationListDetail: FC<IProps> = ({ term, notes }) => {
  if (!notes) return <></>

  return (
    <DescriptionList>
      <DescriptionList.Term>{term}</DescriptionList.Term>
      {notes.map((note, index) => (
        <StyledAnnotation key={`allergy-note-${index + 1}`} isLastAnnotation={index === notes.length - 1}>
          {note?.author && <StyledAnnotationAuthorInfo>{note.author?.display}</StyledAnnotationAuthorInfo>}
          {note?.time && <StyledAnnotationAuthorInfo>{partialDateTimeText(note.time)}</StyledAnnotationAuthorInfo>}
          <StyledAnnotationNoteText>{note?.text}</StyledAnnotationNoteText>
        </StyledAnnotation>
      ))}
    </DescriptionList>
  )
}

interface IProps {
  term: string
  notes?: Maybe<Maybe<Annotation>[]>
}

interface IStyledAnnotation {
  isLastAnnotation: boolean
}

export default AnnotationListDetail
