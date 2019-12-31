import { css } from '@emotion/core'
import { PRIMARY_TEXT_COLOUR } from '../theme/colours'

const CSS_RESET = css`
  & *,
  & ::before,
  & ::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  & * {
    margin: 0;
    padding: 0;
  }
  color: ${PRIMARY_TEXT_COLOUR};
  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`

export { CSS_RESET }
