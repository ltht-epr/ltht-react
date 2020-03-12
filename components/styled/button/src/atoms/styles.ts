import { css } from '@emotion/core'
import { BTN_SECONDARY_COLOUR } from '@ltht-react/styles'

const CSS_DEFAULT = css`
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: '#fff';
  background-color: ${BTN_SECONDARY_COLOUR};
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;

  & :hover {
    cursor: pointer;
  }
`

export default CSS_DEFAULT
