/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { AllergyIntolerance } from '@ltht-react/types'
import Title from '../atoms/allergy-title'
import Date from '../atoms/allergy-date'
import Description from '../atoms/allergy-description'
import Status from '../atoms/allergy-status'
import Icon from '../atoms/allergy-icon'

const styles = {
  root: css`
    display: flex;
    justify-content: center;
  `,
  description: css`
    flex-grow: 1;
    padding-left: 0.5rem;
  `,
  icon: css`
    min-width: 1rem;
  `,
}

const AllergySummaryItem: React.FC<Props> = ({ allergy, clickHandler }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler(allergy)
  }
  return (
    <div css={styles.root} role="link" onClick={clickHandler && handleClick}>
      <div css={styles.icon}>
        <Icon allergy={allergy} />
      </div>
      <div css={styles.description}>
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
}

export default AllergySummaryItem
