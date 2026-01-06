import styled from '@emotion/styled'
import { TABLE_COLOURS } from '@ltht-react/styles'
import { Annotation, Maybe } from '@ltht-react/types'
import { FC } from 'react'

const NoteCell = styled.div`
  padding: 0.5rem;
  border: 1px solid ${TABLE_COLOURS.BORDER};
  flex-grow: 1;
`

const GuidanceNoteCell: FC<{ note: Maybe<Annotation> }> = ({ note }) => <NoteCell> {note?.text} </NoteCell>

export default GuidanceNoteCell
