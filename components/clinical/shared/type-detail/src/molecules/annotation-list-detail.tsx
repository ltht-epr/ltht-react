import styled from '@emotion/styled'
import { Annotation, Maybe } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'
import DescriptionList from '@ltht-react/description-list'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'
import NestedListDetail from './nested-list-detail'

const StyledAnnotation = styled.div<IStyledAnnotation>`
  margin-bottom: ${({ isLastAnnotation }) => (isLastAnnotation ? '0' : '1.5rem')};
`

const StyledAnnotationNoteText = styled(DescriptionList.Description)`
  margin-top: 0.25rem;
`

const StyledAnnotationAuthorInfo = styled(DescriptionList.Description)`
  font-weight: bold;
`

const AnnotationListDetail: DetailViewComponent<IProps> = ({ term, notes, showIfEmpty = false }) => {
  if (showIfEmpty !== true && !notes?.length) return <></>

  return (
    <NestedListDetail term={term} showIfEmpty={showIfEmpty} wrapDescription={false}>
      {notes?.map((note, index) => (
        <StyledAnnotation key={`allergy-note-${index + 1}`} isLastAnnotation={index === notes.length - 1}>
          {note?.author && <StyledAnnotationAuthorInfo>{note.author?.display}</StyledAnnotationAuthorInfo>}
          {note?.time && <StyledAnnotationAuthorInfo>{partialDateTimeText(note.time)}</StyledAnnotationAuthorInfo>}
          <StyledAnnotationNoteText>{note?.text}</StyledAnnotationNoteText>
        </StyledAnnotation>
      ))}
    </NestedListDetail>
  )
}

interface IProps extends IDetailViewProps {
  term: string
  notes?: Maybe<Maybe<Annotation>[]>
}

interface IStyledAnnotation {
  isLastAnnotation: boolean
}

export default AnnotationListDetail
