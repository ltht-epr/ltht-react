/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'

import { CSS_RESET, EFORM_BACKGROUND_COLOUR } from '@ltht-react/styles'

const styles = (): SerializedStyles => {
  return css`
    ${CSS_RESET}
    background: ${EFORM_BACKGROUND_COLOUR};
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgba(102, 102, 102, 0.1), 0px 1px 1px 0px rgba(102, 102, 102, 0.15),
      0px 1px 3px 0px rgba(102, 102, 102, 0.6);
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
    position: relative;
    padding-top: 100%;
    width: 100%;
    height: 100vh;

    iframe {
        width: 100%;
        height: 100%;
        border: 0;
        position: absolute;
        left: 0;
        top: 0;
    }
  `
}

const EForm: React.FC<Props> = ({ url, messageHandler }) => {
  React.useLayoutEffect(() => {
    const handler = (event: MessageEvent): void => {
      switch (event.data.eventType) {
        case 'form-cancelled':
        case 'form-closed':
        case 'form-discarded':
        case 'form-submitted':
          messageHandler(event)
          break
        default:
          break
      }
    }

    window.addEventListener('message', handler)

    return (): void => window.removeEventListener('message', handler)
  }, [messageHandler])

  return (
    <div css={styles}>
      <iframe src={url} title="eForm" />
    </div>
  )
}

interface Props {
  url: string
  messageHandler(event: MessageEvent): void
}

export default EForm
