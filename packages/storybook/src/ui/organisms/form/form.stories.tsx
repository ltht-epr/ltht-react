import { useState, ChangeEvent, FormEvent } from 'react'
import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import Card from '@ltht-react/card'
import { TEXT_COLOURS, DESKTOP_MINIMUM_MEDIA_QUERY } from '@ltht-react/styles'
import { Form, FormCheck } from '@ltht-react/form'
import { RadioButton } from '@ltht-react/input'
import { PrimaryButton } from '@ltht-react/button'

const StyledForm = styled.div`
  margin-top: 5px;
  margin-left: 5px;

  ${DESKTOP_MINIMUM_MEDIA_QUERY} {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0;
  }
`

const StyledText = styled.p`
  color: ${TEXT_COLOURS.SECONDARY};
  margin: 0;
  padding-bottom: 0.3rem;

  ${DESKTOP_MINIMUM_MEDIA_QUERY} {
    padding-bottom: 0.5rem;
  }
`

export const Radio: Story = () => {
  const [reason, setReason] = useState('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => setReason(e.currentTarget.value)
  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
  }

  return (
    <StyledForm>
      <Card>
        <Card.Header>
          <Card.Title>Form Example</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form submitHandler={handleSubmit}>
            <StyledText>Please select the option</StyledText>
            <FormCheck>
              <RadioButton id="1" value="1" label="Option 1" checked={reason === '1'} changeHandler={handleChange} />
            </FormCheck>
            <FormCheck>
              <RadioButton id="2" value="2" label="Option 2" checked={reason === '2'} changeHandler={handleChange} />
            </FormCheck>
            <PrimaryButton type="submit" value="Submit" disabled={reason === ''} />
          </Form>
        </Card.Body>
      </Card>
    </StyledForm>
  )
}

export default { title: 'UI/Organisms/Form' }
