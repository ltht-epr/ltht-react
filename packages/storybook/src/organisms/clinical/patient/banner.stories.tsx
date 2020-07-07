/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { ChevronCircleIcon } from '@ltht-react/icon'
import JSXAddon from 'storybook-addon-jsx'

import readme from '@ltht-react/patient-banner/README.md'
import { TABLET_MEDIA_QUERY } from '@ltht-react/styles'

const verified = css`
  height: 0.6rem;
  width: 0.15rem;
  background-color: #4cc552;
  border-radius: 50%;
  display: inline-block;
  border: 0.15rem solid #fff;
  margin-left: 0.4rem;
  margin-bottom: -0.1rem;
  ${TABLET_MEDIA_QUERY} {
    margin-bottom: 0;
  }
`

const patientName = css`
  color: #fff;
  font-weight: bold;
  font-size: 0.875rem;
`

const keyInfo = css`
  span:first-of-type {
    color: #ccc;
    font-weight: normal;
    font-size: 0.75rem;
  }
  span:last-of-type {
    color: #fff;
    font-weight: bold;
    font-size: 0.875rem;
  }
`

const otherInfo = css`
  span:first-of-type {
    color: #666;
    font-weight: normal;
    font-size: 0.75rem;
  }
  span:last-of-type {
    color: #333333;
    font-weight: bold;
    font-size: 0.8125rem;
  }
`

const column = css`
  display: flex;
  flex-direction: column;
`
const chevron = css`
  margin-right: 0.5rem;
  float: right;
  color: #fff;

  ${TABLET_MEDIA_QUERY} {
    visibility: hidden;
  }
`
const base = (collapsed: boolean, deceased: boolean): SerializedStyles => {
  return css`
    display: flex;
    flex-direction: column;
    font-family: 'Arial';
    background-color: ${deceased ? '#231f20' : '#56008c'};
    border-width: 0.1rem;
    border-style: ${deceased ? 'dashed' : 'solid'};
    border-color: ${deceased ? '#f5f7f8' : '#56008c'};

    div:nth-child(2) {
      ${collapsed && 'visibility: hidden; height: 0;'}
    }

    ${TABLET_MEDIA_QUERY} {
      flex-direction: row;

      div {
        display: flex;
        align-items: center;
      }

      div:first-of-type {
        margin-right: auto;
        border-bottom: none;
      }

      div:nth-child(2) {
        visibility: visible;
        margin-right: 0.5rem;
        height: auto !important;

        div {
          margin-left: 1rem;
        }
      }
    }

    span {
      padding-left: 0.5rem;
    }
  `
}

const additional = (deceased: boolean): SerializedStyles => {
  return css`
    background-color: #fff;
    visibility: hidden;
    border-width: 0.1rem;
    border-style: ${deceased ? 'dashed' : 'solid'};
    border-color: ${deceased ? '#231f20' : '#56008c'};
    border-top: none;

    ${TABLET_MEDIA_QUERY} {
      visibility: visible;
    }
  `
}

const stories = storiesOf('Organisms - Clinical|Patient', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Banner', () => {
  const [collapse, setCollapse] = React.useState(true)
  const handleClick = (): void => {
    setCollapse(!collapse)
  }

  return (
    <div>
      <div css={base(collapse, false)}>
        <div>
          <span css={patientName}>BERYL, Test</span>
          <span css={chevron}>
            <ChevronCircleIcon direction={collapse ? 'right' : 'down'} size="medium" clickHandler={handleClick} />
          </span>
        </div>
        <div>
          <div css={column}>
            <div css={keyInfo}>
              <span>Born</span>
              <span>01-Feb-2001</span>
            </div>
          </div>
          <div css={column}>
            <div css={keyInfo}>
              <span>Gender</span>
              <span>Male</span>
            </div>
          </div>
          <div css={keyInfo}>
            <span>NHS No.</span>
            <span css={verified} />
            <span>999 999 9999</span>
          </div>
        </div>
      </div>
      <div css={[base(false, false), additional(false)]}>
        <div css={otherInfo}>
          <span>Address</span>
          <span>St James Hospital, Beckett Street, Leeds</span>
        </div>
        <div css={otherInfo}>
          <span>PAS No.</span>
          <span>9999999</span>
        </div>
      </div>
    </div>
  )
})

stories.addWithJSX('Banner:Deceased', () => {
  const [collapse, setCollapse] = React.useState(true)
  const handleClick = (): void => {
    setCollapse(!collapse)
  }

  return (
    <div>
      <div css={base(collapse, true)}>
        <div>
          <span css={patientName}>BERYL, Test</span>
          <span css={chevron}>
            <ChevronCircleIcon direction={collapse ? 'right' : 'down'} size="medium" clickHandler={handleClick} />
          </span>
        </div>
        <div>
          <div css={column}>
            <div css={keyInfo}>
              <span>Born</span>
              <span>01-Feb-2001</span>
            </div>
            <div css={keyInfo}>
              <span>Died</span>
              <span>01-Feb-2021</span>
            </div>
          </div>
          <div css={column}>
            <div css={keyInfo}>
              <span>Gender</span>
              <span>Male</span>
            </div>
            <div css={keyInfo}>
              <span>Age at Death</span>
              <span>20y</span>
            </div>
          </div>
          <div css={keyInfo}>
            <span>NHS No.</span>
            <span>999 999 9999</span>
          </div>
        </div>
      </div>
      <div css={[base(false, true), additional(true)]}>
        <div css={otherInfo}>
          <span>Address</span>
          <span>St James Hospital, Beckett Street, Leeds</span>
        </div>
        <div css={otherInfo}>
          <span>PAS No.</span>
          <span>9999999</span>
        </div>
      </div>
    </div>
  )
})
