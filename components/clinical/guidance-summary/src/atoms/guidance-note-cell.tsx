import styled from '@emotion/styled'
import { TABLE_COLOURS } from '@ltht-react/styles'
import { Annotation } from '@ltht-react/types'
import { FC } from 'react'

const NoteCell = styled.div`
  padding: 0.5rem;
  border: 1px solid ${TABLE_COLOURS.BORDER};
  flex-grow: 1;
`

interface Props {
  note: Annotation
}

const GuidanceNoteCell: FC<Props> = ({ note }) => <NoteCell>{note.text}</NoteCell>

export default GuidanceNoteCell
