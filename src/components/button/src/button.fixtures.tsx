import React from 'react'

import Button from '.'

const DefaultButtons = () => {
  return (
    <>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
    </>
  )
}

const PrimaryButtons = () => {
  return (
    <>
      <Button primary>Primary</Button>
      <Button primary disabled>
        Disabled
      </Button>
    </>
  )
}

const WorkflowButtons = () => {
  return (
    <>
      <Button workflow>Workflow</Button>
      <Button workflow disabled>
        Disabled
      </Button>
    </>
  )
}

export default Button

export { DefaultButtons, PrimaryButtons, WorkflowButtons }
