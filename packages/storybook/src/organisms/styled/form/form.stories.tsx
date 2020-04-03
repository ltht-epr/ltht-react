/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import readme from '@ltht-react/form/README.md'
import { Card, CardHeader, CardBody } from '@ltht-react/card'
import { TEXT_COLOURS, DESKTOP_MEDIA_QUERY } from '@ltht-react/styles'
import { Form, FormCheck } from '@ltht-react/form'
import { RadioButton } from '@ltht-react/input'
import { PrimaryButton } from '@ltht-react/button'

const styles = {
  base: css`
    margin-top: 5px;
    margin-left: 5px;
    ${DESKTOP_MEDIA_QUERY} {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 0;
    }
  `,
  text: css`
    color: ${TEXT_COLOURS.SECONDARY};
    padding-bottom: 0.3rem;

    ${DESKTOP_MEDIA_QUERY} {
      padding-bottom: 0.5rem;
    }
  `,
}

const stories = storiesOf('Organisms - Styled|Form', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Radio', () => {
  const [reason, setReason] = React.useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => setReason(e.currentTarget.value)
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
  }

  return (
    <div css={styles.base}>
      <Card>
        <CardHeader>
          <h3>Form example</h3>
        </CardHeader>
        <CardBody>
          <Form submitHandler={handleSubmit}>
            <p css={styles.text}>Please select the option</p>
            <FormCheck>
              <RadioButton id="1" value="1" label="Option 1" checked={reason === '1'} changeHandler={handleChange} />
            </FormCheck>
            <FormCheck>
              <RadioButton id="2" value="2" label="Option 2" checked={reason === '2'} changeHandler={handleChange} />
            </FormCheck>
            <PrimaryButton type="submit" value="Submit" disabled={reason === ''} />
          </Form>
        </CardBody>
      </Card>
    </div>
  )
})
