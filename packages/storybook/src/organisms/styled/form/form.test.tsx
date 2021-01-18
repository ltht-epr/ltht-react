import React from 'react'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'

import { Card, CardBody, CardHeader } from '@ltht-react/card'
import { FormCheck, Form } from '@ltht-react/form'
import { RadioButton } from '@ltht-react/input'
import { PrimaryButton } from '@ltht-react/button'

const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  e.preventDefault()
}
const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
  evt.preventDefault()
}

const components = (
  <Card>
    <CardHeader>
      <h3>Form example</h3>
    </CardHeader>
    <CardBody>
      <Form submitHandler={handleSubmit}>
        <FormCheck>
          <RadioButton id="1" value="1" label="Option 1" checked changeHandler={handleChange} />
        </FormCheck>
        <FormCheck>
          <RadioButton id="2" value="2" label="Option 2" checked={false} changeHandler={handleChange} />
        </FormCheck>
        <PrimaryButton type="submit" value="Submit" disabled />
      </Form>
    </CardBody>
  </Card>
)

describe('Form', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(components, div)
  })
  it('matches snapshot', () => {
    expect(mount(components)).toMatchSnapshot('wrapper mount')
  })
})
