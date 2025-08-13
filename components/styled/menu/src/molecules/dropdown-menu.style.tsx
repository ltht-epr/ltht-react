import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { BTN_COLOURS } from '@ltht-react/styles'

const nestedStyles = css`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  width: 100%;
  border: none;
  text-align: left;
  line-height: 1.8;
  min-width: 80px;
  margin: 0;
  outline: 0;

  &:focus {
    background: ${BTN_COLOURS.PRIMARY.HOVER};
    color: ${BTN_COLOURS.PRIMARY.TEXT};
  }

  &[data-nested][data-open]:not([data-focus-inside]) {
    background: ${BTN_COLOURS.PRIMARY.HOVER};
    color: ${BTN_COLOURS.PRIMARY.TEXT};
  }

  &[data-focus-inside][data-open] {
    background: ${BTN_COLOURS.PRIMARY.HOVER};
    color: ${BTN_COLOURS.PRIMARY.TEXT};
  }

  &:not(:last-child) {
    border-bottom: 1px solid #e0e6ef;
  }

  &:hover > svg {
    color: ${BTN_COLOURS.PRIMARY.TEXT};
  }

  &[disabled] > svg {
    color: rgba(16, 16, 16, 0.3);
  }

  &[disabled]:hover {
    cursor: not-allowed;
  }

  &:hover {
    cursor: pointer;
  }
`

const rootStyles = css`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 0.25rem;
  padding: 6px 10px;
  border: 0;
  font-size: 0.9rem;
  background: none;
  border-radius: 6px;
  cursor: pointer;

  &[disabled]:hover {
    background: none;
    cursor: not-allowed;
  }

  &[disabled]:hover > svg {
    color: ${BTN_COLOURS.PRIMARY.DISABLED};
  }

  &[data-open],
  &:hover {
    background: ${BTN_COLOURS.PRIMARY.HOVER};
    color: ${BTN_COLOURS.PRIMARY.TEXT};
  }

  &[data-open] > svg,
  &:focus > svg,
  &:hover > svg {
    color: ${BTN_COLOURS.PRIMARY.TEXT};
  }
`

export const StyledRootMenu = styled.button<{ isNested?: boolean }>`
  ${({ isNested }) => (isNested ? nestedStyles : rootStyles)}
`

export const StyledMenu = styled.div`
  background: rgba(255, 255, 255, 0.8);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1);
  outline: 0;
`

export const StyledMenuItem = styled.button`
  ${nestedStyles}
`
