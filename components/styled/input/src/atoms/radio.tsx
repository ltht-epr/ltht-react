/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'

// todo use css checked

export const styles = (checked: boolean): SerializedStyles => {
  return css`
    padding-left: 1.25rem;
    ${checked && 'background-color: #ddefc7; '}

    input {
      position: absolute;
      margin-top: 0.15rem;
      margin-left: -1.25rem;
    }

    label {
      display: inline-block;
      margin-bottom: 0;
    }
  `
}

const RadioButton: React.FC<Props> = ({ id, value, checked = false, label, changeHandler }) => {
  return (
    <div css={styles(checked)}>
      <input id={id} onChange={changeHandler} value={value} type="radio" checked={checked} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

interface Props {
  id: string
  value: string
  checked?: boolean
  label: string
  changeHandler(e: React.ChangeEvent<HTMLInputElement>): void
}

export default RadioButton
