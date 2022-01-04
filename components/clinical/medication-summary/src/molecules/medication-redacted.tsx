import { FC } from 'react'
import styled from '@emotion/styled'

import { RedactedDescription } from '@ltht-react/type-summary'

const StyledRedactedDescription = styled.div`
  flex-grow: 1;
  text-align: left;
`

const MedicationRedacted: FC = () => (
  <StyledRedactedDescription>
    <RedactedDescription />
  </StyledRedactedDescription>
)

export default MedicationRedacted
