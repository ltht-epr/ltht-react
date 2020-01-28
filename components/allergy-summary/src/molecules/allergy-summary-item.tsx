/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { AllergyIntolerance } from '@ltht-react/types'
import Title from '../atoms/allergy-title'
import Date from '../atoms/allergy-date'
import Description from '../atoms/allergy-description'
import Status from '../atoms/allergy-status'
import Icon from '../atoms/allergy-icon'

const styles = css`
  display: flex;
  justify-content: center;
`
const descriptionStyles = css`
  flex-grow: 1;
  padding-left: 0.5rem;
`

const iconStyles = css`
  min-width: 1rem;
`

const AllergySummaryItem: React.FC<Props> = ({ allergy, clickHandler, tabIndex }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>): void => {
    e.preventDefault()
    clickHandler && clickHandler(allergy)
  }
  return (
    <div
      role="link"
      tabIndex={tabIndex}
      css={styles}
      onClick={clickHandler && handleClick}
      onKeyDown={clickHandler && handleClick}
    >
      <div css={iconStyles}>
        <Icon allergy={allergy} />
      </div>
      <div css={descriptionStyles}>
        <Title allergy={allergy} />
        <Description allergy={allergy} />
      </div>
      <div>
        <Date allergy={allergy} />
        <Status allergy={allergy} />
      </div>
    </div>
  )
}

interface Props {
  allergy: AllergyIntolerance
  clickHandler?(allergy: AllergyIntolerance): void
  tabIndex: number
}

export default AllergySummaryItem
