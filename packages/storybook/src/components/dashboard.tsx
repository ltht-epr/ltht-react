/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const wrapStyles = css`
  -ms-overflow-style: none;
  display: flex;
  overflow-y: hidden;
  height: 100vh;
`

const Wrap = ({ children }: Props) => {
  return <div css={wrapStyles}>{children}</div>
}

const columnStyles = css`
  position: relative;
  flex: 1;
`

const Column = ({ children }: Props) => {
  return <div css={columnStyles}>{children}</div>
}

const widgetsStyles = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 1rem;
  -ms-overflow-style: none;
  overflow-y: scroll; /* has to be scroll, not auto */
  -webkit-overflow-scrolling: touch;

  & > div {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
`

const Widgets = ({ children }: Props) => {
  return <div css={widgetsStyles}>{children}</div>
}

interface Props {
  children: React.ReactChild | React.ReactChild[]
}

export { Wrap, Column, Widgets }
