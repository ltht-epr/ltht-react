import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import EForm from '@ltht-react/eform'
import readme from '@ltht-react/eform/README.md'

const stories = storiesOf('Organisms - Clinical|EForm', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

const handler3 = (name: string, event: MessageEvent): void => {
  // eslint-disable-next-line no-console
  console.log(name, event)
}

stories.addWithJSX('Wikipedia', () => {
  return (
    <div>
      <EForm url="https://localhost:44349/patient/2157b18f-e765-e111-87c1-001e6886537f/instance/a6f4809c-82b9-45b2-a187-90e2c0d21c54/ViewLastCompleted?hideFooter=true&hideBanner=true" />
      <EForm url="https://localhost:44349/patient/2157b18f-e765-e111-87c1-001e6886537f/instance/a6f4809c-82b9-45b2-a187-90e2c0d21c54/ViewLastCompleted?hideFooter=true&hideBanner=true" />
      <EForm
        url="https://localhost:44349/patient/2157b18f-e765-e111-87c1-001e6886537f/instance/0d0709a3-5ce6-43d1-928e-578d2916eede/Edit?hideBanner=true"
        callback={{ name: 'edit form 1', handler: handler3 }}
      />
      <EForm
        url="https://localhost:44349/patient/2157b18f-e765-e111-87c1-001e6886537f/instance/0d0709a3-5ce6-43d1-928e-578d2916eede/Edit?hideBanner=true"
        callback={{ name: 'edit form 2', handler: handler3 }}
      />
    </div>
  )
})
