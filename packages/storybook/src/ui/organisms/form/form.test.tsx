import React from 'react'
import { render } from '@testing-library/react'

import { FormCheck, Form } from '@ltht-react/form'
import { RadioButton } from '@ltht-react/input'
import { PrimaryButton } from '@ltht-react/button'

const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  e.preventDefault()
}
const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
  evt.preventDefault()
}

describe('Form', () => {
  it('Renders', () => {
    render(
      <Form submitHandler={handleSubmit}>
        <FormCheck>
          <RadioButton id="1" value="1" label="Option 1" checked changeHandler={handleChange} />
        </FormCheck>
        <FormCheck>
          <RadioButton id="2" value="2" label="Option 2" checked={false} changeHandler={handleChange} />
        </FormCheck>
        <PrimaryButton type="submit" value="Submit" disabled />
      </Form>
    )
  })
})
