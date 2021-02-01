import React, { HTMLAttributes, useState } from 'react'
import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/core'
import { Patient } from '@ltht-react/types'
import {
  TABLET_MEDIA_QUERY,
  PATIENT_BANNER_BACKGROUND_COLOUR,
  PATIENT_BANNER_DECEASED_BACKGROUND_COLOUR,
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

  ${TABLET_MEDIA_QUERY} {
    flex-direction: row;
    align-items: center;
    cursor: initial;
  }

  ${({ collapsed }): ConditionalStyles =>
    collapsed &&
    css`
      height: 1rem;
      overflow-y: hidden;

      ${TABLET_MEDIA_QUERY} {
        height: auto;
      }
    `}
`

const StyledName = styled.div`
  margin-bottom: 0.5rem;

  ${TABLET_MEDIA_QUERY} {
    flex: 1;
    margin-bottom: 0;
  }
`

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.5rem;

  ${TABLET_MEDIA_QUERY} {
    text-align: right;
  }
`

const StyledChevronCircleIcon = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  display: inline-block;
  color: white;
  font-size: 0.9rem;

  ${TABLET_MEDIA_QUERY} {
    display: none;
  }
`

const PrimaryInformation: React.FC<Props> = ({ patient }) => {
  const [collapsed, setCollapsed] = useState(true)
  const deceased = patient?.deceased?.deceasedBoolean ?? false

  const handleClick = (): void => setCollapsed(prevState => !prevState)

  return (
    <StyledPrimaryInformation deceased={deceased} onClick={handleClick} collapsed={collapsed}>
      <StyledName>
        <Name patient={patient} />
      </StyledName>
      <StyledChevronCircleIcon>
        <ChevronCircleIcon direction={collapsed ? 'up' : 'down'} size="medium" />
      </StyledChevronCircleIcon>
      <StyledInfo>
        <DateOfBirth patient={patient} />
        {deceased && <DateOfDeath patient={patient} />}
      </StyledInfo>
      <StyledInfo>
        <Gender patient={patient} />
        {deceased && <AgeAtDeath patient={patient} />}
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
}

export default PrimaryInformation
