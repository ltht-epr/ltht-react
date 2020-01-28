/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const styles = {
  wrap: css`
    -ms-overflow-style: none;
    display: flex;
    overflow-y: hidden;
    height: 100vh;
  `,
  column: css`
    position: relative;
    flex: 1;
  `,
  widget: css`
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
  `,
}

const Wrap: React.FC = ({ children }) => {
  return <div css={styles.wrap}>{children}</div>
}

const Column: React.FC = ({ children }) => {
  return <div css={styles.column}>{children}</div>
}

const Widgets: React.FC = ({ children }) => {
  return <div css={styles.widget}>{children}</div>
}

export { Wrap, Column, Widgets }
