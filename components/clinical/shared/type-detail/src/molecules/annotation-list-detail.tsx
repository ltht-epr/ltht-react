import styled from '@emotion/styled'
import { Annotation, Maybe } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'
import DescriptionList from '@ltht-react/description-list'
import { DetailViewComponent, IDetailViewProps } from '../atoms/detail-view-component'
import NestedListDetail from './nested-list-detail'
import ReactHtmlParser from 'react-html-parser'

const StyledAnnotationNoteText = styled(DescriptionList.Description)`
  margin-top: 0.25rem;
`

const StyledAnnotationAuthorInfo = styled(DescriptionList.Description)`
  font-weight: bold;
`

const StyledList = styled.ul`
  padding-left: 1rem;
`

const AnnotationListDetail: DetailViewComponent<IProps> = ({ term, notes, showIfEmpty = false }) => {
  if (showIfEmpty !== true && !notes?.length) return <></>

  return (
    <NestedListDetail
      term={term}
      showIfEmpty={showIfEmpty}
      wrapDescription={false}
      className={
        notes?.some((note) => note && note.text.length > 150)
          ? 'annotation-list-detail--full-width'
          : 'annotation-list-detail'
      }
    >
      <StyledList>
        {notes?.map((note, index) => (
          <li key={`allergy-note-${index + 1}`}>
            {note?.author && <StyledAnnotationAuthorInfo>{note.author?.display}</StyledAnnotationAuthorInfo>}
            {note?.time && <StyledAnnotationAuthorInfo>{partialDateTimeText(note.time)}</StyledAnnotationAuthorInfo>}
            <StyledAnnotationNoteText>{ReactHtmlParser(note?.text)}</StyledAnnotationNoteText>
          </li>
        ))}
      </StyledList>
    </NestedListDetail>
  )
}

interface IProps extends IDetailViewProps {
  term: string
  notes?: Maybe<Maybe<Annotation>[]>
}

export default AnnotationListDetail
