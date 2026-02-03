import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Icon from '@ltht-react/icon'
import { TABLE_COLOURS } from '@ltht-react/styles'
import { Annotation } from '@ltht-react/types'
import { FC } from 'react'

const baseStyles = css`
  padding: 0.5rem;
  border: 1px solid ${TABLE_COLOURS.BORDER};
  flex-grow: 1;
`

const NoteCell = styled.div`
  ${baseStyles};
`

const ClickableNoteCell = styled.a`
  ${baseStyles};
  pointer: cursor;
`

const GuidanceNoteCell: FC<Props> = ({ note }) => {
  const externalLink = note.extension?.find(
    (x) => x?.url === 'https://leedsth.nhs.uk/ehr/guidance/additional-guidance-uri'
  )?.valueString

  const clickable = !!externalLink?.length

  return clickable ? (
    <ClickableNoteCell target="_blank" href={externalLink}>
      {note.text}&nbsp;
      <Icon type="external-link" size="medium" />
    </ClickableNoteCell>
  ) : (
    <NoteCell>{note.text}</NoteCell>
  )
}

interface Props {
  note: Annotation
}

export default GuidanceNoteCell
