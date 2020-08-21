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
    padding-top: 0;
    width: 100%;
    height: 100%;

    iframe {
        width: 100%;
        height: 100%;
        border: 0;
    }
  `
}

const EForm: React.FC<Props> = ({ url, callback }) => {
  React.useLayoutEffect(() => {
    function handleEvent(event: MessageEvent): void {
      switch (event.data.eventType) {
        case 'form-cancelled':
        case 'form-closed':
        case 'form-discarded':
        case 'form-submitted':
          callback?.handler(callback.name, event)
          break
        default:
          break
      }
    }

    if (callback) window.addEventListener('message', handleEvent)

    return (): void => {
      if (callback) window.removeEventListener('message', handleEvent)
    }
  }, [callback])

  return (
    <div css={styles}>
      <iframe src={url} title="eForm" />
    </div>
  )
}

interface Callback {
  name: string
  handler(name: string, event: MessageEvent): void
}

interface Props {
  url: string
  callback?: Callback
}

export default EForm
