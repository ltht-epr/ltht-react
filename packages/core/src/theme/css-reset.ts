import { css } from '@emotion/core'

const CSS_RESET = css`
  & *,
  & ::before,
  & ::after {
    box-sizing: border-box;
  }
  & ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  & * {
    margin: 0;
    padding: 0;
  }
  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`

export { CSS_RESET }
