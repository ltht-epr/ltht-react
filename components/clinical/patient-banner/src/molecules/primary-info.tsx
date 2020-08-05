/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'
import { Patient } from '@ltht-react/types'
import { TABLET_MEDIA_QUERY } from '@ltht-react/styles'
import { ChevronCircleIcon } from '@ltht-react/icon'

import Name from '../atoms/name'
import DateOfBirth from '../atoms/date-of-birth'
import DateOfDeath from '../atoms/date-of-death'
import AgeAtDeath from '../atoms/age-at-death'
import Gender from '../atoms/gender'
import NhsNumber from '../atoms/nhs-number'

const styles = (collapsed: boolean, deceased: boolean): SerializedStyles => {
  return css`
    display: flex;
    flex-direction: column;
    background-color: ${deceased ? '#231f20' : '#56008c'};
    padding: 0.5rem;

    & > div {
      display: flex;
    }

    & > div:first-of-type,
    & > div:last-of-type {
      justify-content: space-between;
      align-items: center;
    }

    & > div:not(:first-of-type) {
      ${collapsed ? 'visibility: hidden; height: 0;' : 'padding-top: 0.25rem;'}
    }

    ${TABLET_MEDIA_QUERY} {
      flex-direction: row;

      & > div {
        margin-left: 2.5rem;
      }

      & > div:first-of-type {
        margin-left: 0;
        margin-right: auto;
      }

      & > div:not(:first-of-type) {
        visibility: visible;
        height: auto !important;
        padding-top: 0;
      }
    }
  `
}

const column = css`
  flex-direction: column;
`

const chevron = css`
  color: #fff;

  ${TABLET_MEDIA_QUERY} {
    visibility: hidden;
  }
`

const PrimaryInformation: React.FC<Props> = ({ patient }) => {
  const [collapsed, setCollapsed] = React.useState(true)
  const handleClick = (): void => {
    setCollapsed(!collapsed)
  }
  const deceased = patient?.deceased?.deceasedBoolean ?? false

  return (
    <div css={styles(collapsed, deceased)}>
      <div>
        <Name patient={patient} />
        <span css={chevron}>
          <ChevronCircleIcon direction={collapsed ? 'up' : 'down'} size="medium" clickHandler={handleClick} />
        </span>
      </div>
      <div css={column}>
        <DateOfBirth patient={patient} />
        <DateOfDeath patient={patient} />
      </div>
      <div css={column}>
        <Gender patient={patient} />
        <AgeAtDeath patient={patient} />
      </div>
      <div>
        <NhsNumber patient={patient} />
      </div>
    </div>
  )
}

interface Props {
  patient: Patient | undefined
}

export default PrimaryInformation
