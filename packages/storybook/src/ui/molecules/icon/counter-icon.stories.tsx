import Icon from '@ltht-react/icon'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  component: Icon,
}

export default meta

export const Small: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="counter" size="small" color="black" counterValue={1} />
      <Icon type="counter" size="small" color="black" counterValue={5} />
      <Icon type="counter" size="small" color="black" counterValue={10} />
      <Icon type="counter" size="small" color="dark-blue" counterValue={1} />
      <Icon type="counter" size="small" color="dark-blue" counterValue={5} />
      <Icon type="counter" size="small" color="dark-blue" counterValue={10} />
      <Icon type="counter" size="small" color="amber" counterValue={1} />
      <Icon type="counter" size="small" color="amber" counterValue={5} />
      <Icon type="counter" size="small" color="amber" counterValue={10} />
      <Icon type="counter" size="small" color="grey" counterValue={1} />
      <Icon type="counter" size="small" color="grey" counterValue={5} />
      <Icon type="counter" size="small" color="grey" counterValue={10} />
      <Icon type="counter" size="small" color="red" counterValue={1} />
      <Icon type="counter" size="small" color="red" counterValue={5} />
      <Icon type="counter" size="small" color="red" counterValue={10} />
      <Icon type="counter" size="small" color="green" counterValue={1} />
      <Icon type="counter" size="small" color="green" counterValue={5} />
      <Icon type="counter" size="small" color="green" counterValue={10} />
    </>
  ),
}

export const Medium: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="counter" size="medium" color="black" counterValue={1} />
      <Icon type="counter" size="medium" color="black" counterValue={5} />
      <Icon type="counter" size="medium" color="black" counterValue={10} />
      <Icon type="counter" size="medium" color="dark-blue" counterValue={1} />
      <Icon type="counter" size="medium" color="dark-blue" counterValue={5} />
      <Icon type="counter" size="medium" color="dark-blue" counterValue={10} />
      <Icon type="counter" size="medium" color="amber" counterValue={1} />
      <Icon type="counter" size="medium" color="amber" counterValue={5} />
      <Icon type="counter" size="medium" color="amber" counterValue={10} />
      <Icon type="counter" size="medium" color="grey" counterValue={1} />
      <Icon type="counter" size="medium" color="grey" counterValue={5} />
      <Icon type="counter" size="medium" color="grey" counterValue={10} />
      <Icon type="counter" size="medium" color="red" counterValue={1} />
      <Icon type="counter" size="medium" color="red" counterValue={5} />
      <Icon type="counter" size="medium" color="red" counterValue={10} />
      <Icon type="counter" size="medium" color="green" counterValue={1} />
      <Icon type="counter" size="medium" color="green" counterValue={5} />
      <Icon type="counter" size="medium" color="green" counterValue={10} />
    </>
  ),
}

export const Large: StoryObj<typeof Icon> = {
  render: () => (
    <>
      <Icon type="counter" size="large" color="black" counterValue={1} />
      <Icon type="counter" size="large" color="black" counterValue={5} />
      <Icon type="counter" size="large" color="black" counterValue={10} />
      <Icon type="counter" size="large" color="dark-blue" counterValue={1} />
      <Icon type="counter" size="large" color="dark-blue" counterValue={5} />
      <Icon type="counter" size="large" color="dark-blue" counterValue={10} />
      <Icon type="counter" size="large" color="amber" counterValue={1} />
      <Icon type="counter" size="large" color="amber" counterValue={5} />
      <Icon type="counter" size="large" color="amber" counterValue={10} />
      <Icon type="counter" size="large" color="grey" counterValue={1} />
      <Icon type="counter" size="large" color="grey" counterValue={5} />
      <Icon type="counter" size="large" color="grey" counterValue={10} />
      <Icon type="counter" size="large" color="red" counterValue={1} />
      <Icon type="counter" size="large" color="red" counterValue={5} />
      <Icon type="counter" size="large" color="red" counterValue={10} />
      <Icon type="counter" size="large" color="green" counterValue={1} />
      <Icon type="counter" size="large" color="green" counterValue={5} />
      <Icon type="counter" size="large" color="green" counterValue={10} />
    </>
  ),
}
