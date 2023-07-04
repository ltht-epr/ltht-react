import { Story } from '@storybook/react'
import { Icon } from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Counter: Story = () => (
  <>
    <br />
    <Icon type="counter" size="small" status="primary" counterValue={1} />
    <Icon type="counter" size="medium" status="primary" counterValue={5} />
    <Icon type="counter" size="large" status="primary" counterValue={10} />
    <br />
    <Icon type="counter" size="small" status="secondary" counterValue={1} />
    <Icon type="counter" size="medium" status="secondary" counterValue={5} />
    <Icon type="counter" size="large" status="secondary" counterValue={10} />
    <br />
    <Icon type="counter" size="small" status="warning" counterValue={1} />
    <Icon type="counter" size="medium" status="warning" counterValue={5} />
    <Icon type="counter" size="large" status="warning" counterValue={10} />
    <br />
    <Icon type="counter" size="small" status="danger" counterValue={1} />
    <Icon type="counter" size="medium" status="danger" counterValue={5} />
    <Icon type="counter" size="large" status="danger" counterValue={10} />
    <br />
    <Icon type="counter" size="small" status="disabled" counterValue={1} />
    <Icon type="counter" size="medium" status="disabled" counterValue={5} />
    <Icon type="counter" size="large" status="disabled" counterValue={10} />
    <br />
    <Icon type="counter" size="small" status="success" counterValue={1} />
    <Icon type="counter" size="medium" status="success" counterValue={5} />
    <Icon type="counter" size="large" status="success" counterValue={10} />
  </>
)
