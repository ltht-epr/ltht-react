import { FC } from 'react'
import styled from '@emotion/styled'

import { Encounter } from '@ltht-react/types'
import { DateSummary, RedactedDescription } from '@ltht-react/type-summary'

const StyledDateSummary = styled.div`
  text-align: left;
`

const StyledRedactedDescription = styled.div`
  flex-grow: 1;
  text-align: right;
`

const AppointmentRedacted: FC<Props> = ({ appointment }) => (
  <>
    <StyledDateSummary>
      <DateSummary datetime={appointment?.period?.start} />
    </StyledDateSummary>
    <StyledRedactedDescription>
      <RedactedDescription />
    </StyledRedactedDescription>
  </>
)

interface Props {
  appointment?: Encounter | null
}

export default AppointmentRedacted
