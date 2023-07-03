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
    <Icon type="counter" size="small" status="amber" counterValue={1} />
    <Icon type="counter" size="medium" status="amber" counterValue={5} />
    <Icon type="counter" size="large" status="amber" counterValue={10} />
    <br />
    <Icon type="counter" size="small" status="red" counterValue={1} />
    <Icon type="counter" size="medium" status="red" counterValue={5} />
    <Icon type="counter" size="large" status="red" counterValue={10} />
    <br />
    <Icon type="counter" size="small" status="default" counterValue={1} />
    <Icon type="counter" size="medium" status="default" counterValue={5} />
    <Icon type="counter" size="large" status="default" counterValue={10} />
    <br />
    <Icon type="counter" size="small" status="green" counterValue={1} />
    <Icon type="counter" size="medium" status="green" counterValue={5} />
    <Icon type="counter" size="large" status="green" counterValue={10} />
  </>
)
