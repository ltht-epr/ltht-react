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

const styles = (collapsed: boolean): SerializedStyles => {
  return css`
    display: flex;
    flex-direction: column;
    background-color: inherit;
    padding: 0.5rem;

    & > div {
      display: flex;
    }

    & > div:first-child {
      justify-content: space-between;
    }

    & > div:not(:first-child) {
      ${collapsed && 'visibility: hidden; height: 0;'}
    }

    ${TABLET_MEDIA_QUERY} {
      flex-direction: row;

      & > div {
        margin-left: 2rem;
      }

      & > div:first-child {
        margin-left: 0;
        margin-right: auto;
      }

      & > div:not(:first-child) {
        visibility: visible;
        height: auto !important;
      }

      span {
        height: fit-content;
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

  return (
    <div css={styles(collapsed)}>
      <div>
        <Name patient={patient} />
        <span css={chevron}>
          <ChevronCircleIcon direction={collapsed ? 'right' : 'down'} size="medium" clickHandler={handleClick} />
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
  patient: Patient
}

export default PrimaryInformation
