import { css } from '@emotion/core'
import { TEXT_PRIMARY_COLOUR } from './colours'
import { TABLET_MEDIA_QUERY, DESKTOP_MEDIA_QUERY, WIDESCREEN_MEDIA_QUERY } from './media-queries'

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
  color: ${TEXT_PRIMARY_COLOUR};
  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 0.8rem;

  & h3 {
    font-size: 1rem;
  }

  ${TABLET_MEDIA_QUERY} {
    font-size: 0.9rem;
    & h3 {
      font-size: 1.1rem;
    }
  }
  ${DESKTOP_MEDIA_QUERY} {
    font-size: 1rem;
    & h3 {
      font-size: 1.2rem;
    }
  }
  ${WIDESCREEN_MEDIA_QUERY} {
    font-size: 1.1rem;
    & h3 {
      font-size: 1.3rem;
    }
  }
`

export default CSS_RESET
