import { css } from '@emotion/react'
import { TEXT_COLOURS } from './colours'
import { TABLET_MEDIA_QUERY, DESKTOP_MEDIA_QUERY, WIDESCREEN_MEDIA_QUERY } from './media-queries'

const CSS_RESET = css`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  color: ${TEXT_COLOURS.PRIMARY};
  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 0.8rem;

  & h3 {
    font-size: 1rem;
  }

  ${TABLET_MEDIA_QUERY} {
    font-size: 0.9rem;
  }

  ${DESKTOP_MEDIA_QUERY} {
    & h3 {
      font-size: 1rem;
    }
  }

  ${WIDESCREEN_MEDIA_QUERY} {
    & h3 {
      font-size: 1.1rem;
    }
  }
`

export default CSS_RESET
