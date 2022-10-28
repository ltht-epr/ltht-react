import { FC, HTMLAttributes, useState } from 'react'
import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/react'
import { Patient } from '@ltht-react/types'
import {
  PATIENT_BANNER_BACKGROUND_COLOUR,
  PATIENT_BANNER_DECEASED_BACKGROUND_COLOUR,
  TABLET_MINIMUM_MEDIA_QUERY,
} from '@ltht-react/styles'
import { ChevronCircleIcon } from '@ltht-react/icon'

import Name from '../atoms/name'
import DateOfBirth from '../atoms/date-of-birth'
import DateOfDeath from '../atoms/date-of-death'
import AgeAtDeath from '../atoms/age-at-death'
import Gender from '../atoms/gender'
import NhsNumber from '../atoms/nhs-number'

const StyledPrimaryInformation = styled.div<StyledPrimaryInformationProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
  cursor: pointer;
  background-color: ${({ deceased }): string =>
    deceased ? `${PATIENT_BANNER_DECEASED_BACKGROUND_COLOUR}` : `${PATIENT_BANNER_BACKGROUND_COLOUR}`};

  ${TABLET_MINIMUM_MEDIA_QUERY} {
    flex-direction: row;
    align-items: center;
    cursor: initial;
  }

  ${({ collapsed }): ConditionalStyles =>
    collapsed &&
    css`
      height: 2rem;
      overflow-y: hidden;

      ${TABLET_MINIMUM_MEDIA_QUERY} {
        height: auto;
      }
    `}
`

const StyledName = styled.div`
  margin-bottom: 0.5rem;

  ${TABLET_MINIMUM_MEDIA_QUERY} {
    flex: 1;
    margin-bottom: 0;
  }
`

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.5rem;

  ${TABLET_MINIMUM_MEDIA_QUERY} {
    text-align: right;
  }
`

const StyledChevronCircleIcon = styled(ChevronCircleIcon)`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  display: inline-block;
  color: white;
  font-size: 0.9rem;

  ${TABLET_MINIMUM_MEDIA_QUERY} {
    display: none;
  }
`

const PrimaryInformation: FC<Props> = ({ patient, deceased }) => {
  const [collapsed, setCollapsed] = useState(true)

  const handleClick = (): void => setCollapsed((prevState) => !prevState)

  return (
    <StyledPrimaryInformation deceased={deceased} onClick={handleClick} collapsed={collapsed}>
      <StyledName>
        <Name patient={patient} />
      </StyledName>
      <StyledChevronCircleIcon direction={collapsed ? 'up' : 'down'} size="medium" />
      <StyledInfo>
        <DateOfBirth patient={patient} deceased={deceased} />
        {deceased && patient?.deceased?.deceasedDateTime && <DateOfDeath patient={patient} />}
      </StyledInfo>
      <StyledInfo>
        <Gender patient={patient} />
        {deceased && patient?.deceased?.deceasedDateTime && <AgeAtDeath patient={patient} deceased={deceased} />}
      </StyledInfo>
      <NhsNumber patient={patient} />
    </StyledPrimaryInformation>
  )
}

type ConditionalStyles = SerializedStyles | false

interface StyledPrimaryInformationProps extends HTMLAttributes<HTMLDivElement> {
  deceased: boolean
  collapsed: boolean
}

interface Props {
  patient: Patient | undefined
  deceased: boolean
}

export default PrimaryInformation
