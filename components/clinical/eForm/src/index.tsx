import { FC, HTMLAttributes, useLayoutEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { CSS_RESET, EFORM_BACKGROUND_COLOUR } from '@ltht-react/styles'

const StyledIframe = styled.div`
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

const EForm: FC<Props> = ({ url, callback, checksum = 0, id, ...rest }) => {
  const [iframeKey, setIframeKey] = useState(0)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  useLayoutEffect(() => {
    function handleEvent(event: MessageEvent): void {
      const forwardFormsForHealthMessage = (event: MessageEvent) => {
        if (
          ['form-cancelled', 'form-closed', 'form-discarded', 'form-submitted', 'form-keep-alive'].includes(
            event.data.eventType
          )
        ) {
          callback?.handler(callback.name, event)
        }
      }

      const forwardParentMessage = (event: MessageEvent) => {
        if (event.data.eventType === 'close-form' || event.data === 'parent:closing') {
          iframeRef.current?.contentWindow?.postMessage(event.data, '*')
        }
      }

      if (event.source === iframeRef.current?.contentWindow) {
        forwardFormsForHealthMessage(event)
      } else if (event.source === window.top) {
        forwardParentMessage(event)
      }
    }

    if (callback) window.addEventListener('message', handleEvent)

    return (): void => {
      if (callback) window.removeEventListener('message', handleEvent)
    }
  }, [callback])

  useLayoutEffect(() => {
    setIframeKey(checksum)
  }, [checksum])

  return (
    <StyledIframe {...rest}>
      <iframe
        key={iframeKey}
        ref={iframeRef}
        src={url}
        title="eForm"
        data-iframe-key={iframeKey}
        id={id ?? 'f4h-eform-iframe'}
      />
    </StyledIframe>
  )
}

interface Callback {
  name: string
  handler(name: string, event: MessageEvent): void
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  url: string
  callback?: Callback
  checksum?: number
}

export default EForm
