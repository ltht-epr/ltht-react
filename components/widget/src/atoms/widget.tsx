/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'

import { CSS_RESET, TEXT_PRIMARY_COLOUR, TEXT_SECONDARY_COLOUR, WIDGET_BACKGROUND_COLOUR } from '@ltht-react/styles'
import { WidgetProvider, ProviderProps } from './widget-context'
import WidgetBody from './widget-body'

const styles = (noData: boolean): SerializedStyles => {
  return css`
  ${CSS_RESET}
  background: ${WIDGET_BACKGROUND_COLOUR};
  color: ${noData ? TEXT_SECONDARY_COLOUR : TEXT_PRIMARY_COLOUR};
  margin-bottom: 0.5rem;
  border-radius: 4px;
  box-shadow: 
    0px 2px 1px -1px rgba(102, 102, 102, 0.1), 
    0px 1px 1px 0px rgba(102, 102, 102, 0.15), 
    0px 1px 3px 0px rgba(102, 102, 102,.6);
  margin: 0 5px 10px 0;
  -webkit-font-smoothing: antialiased;
`
}

const emptyStyles = css`
  color: ${TEXT_SECONDARY_COLOUR};
  font-style: italic;
`

const Widget: React.FC<Props> = ({ children, collapsible = true, collapsed, noData = false }) => {
  return (
    <WidgetProvider collapsible={collapsible} collapsed={collapsed} noData={noData}>
      <div css={styles(noData)}>
        {children}
        {noData && (
          <WidgetBody>
            <div css={emptyStyles}>No records found.</div>
          </WidgetBody>
        )}
      </div>
    </WidgetProvider>
  )
}

interface Props extends ProviderProps {
  noData?: boolean
}

export default Widget
