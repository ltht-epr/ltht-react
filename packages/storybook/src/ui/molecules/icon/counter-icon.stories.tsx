import { Story } from '@storybook/react'
import Icon from '@ltht-react/icon'

// eslint-disable-next-line import/prefer-default-export
export const Counter: Story = () => (
  <>
    <br />
    <Icon type="counter" size="small" color="black" counterValue={1} />
    <Icon type="counter" size="medium" color="black" counterValue={5} />
    <Icon type="counter" size="large" color="black" counterValue={10} />
    <br />
    <Icon type="counter" size="small" color="dark-blue" counterValue={1} />
    <Icon type="counter" size="medium" color="dark-blue" counterValue={5} />
    <Icon type="counter" size="large" color="dark-blue" counterValue={10} />
    <br />
    <Icon type="counter" size="small" color="amber" counterValue={1} />
    <Icon type="counter" size="medium" color="amber" counterValue={5} />
    <Icon type="counter" size="large" color="amber" counterValue={10} />
    <br />
    <Icon type="counter" size="small" color="red" counterValue={1} />
    <Icon type="counter" size="medium" color="red" counterValue={5} />
    <Icon type="counter" size="large" color="red" counterValue={10} />
    <br />
    <Icon type="counter" size="small" color="grey" counterValue={1} />
    <Icon type="counter" size="medium" color="grey" counterValue={5} />
    <Icon type="counter" size="large" color="grey" counterValue={10} />
    <br />
    <Icon type="counter" size="small" color="green" counterValue={1} />
    <Icon type="counter" size="medium" color="green" counterValue={5} />
    <Icon type="counter" size="large" color="green" counterValue={10} />
  </>
)
