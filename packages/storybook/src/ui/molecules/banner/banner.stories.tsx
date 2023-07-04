/* eslint-disable  no-console */

import { Story } from '@storybook/react'

import Banner from '@ltht-react/banner'
import Icon from '@ltht-react/icon'

export const Info: Story = () => <Banner type="info">Info Banner</Banner>
export const Warning: Story = () => <Banner type="warning">Warning Banner</Banner>
export const Danger: Story = () => <Banner type="danger">Danger Banner</Banner>

export const WithCustomIcon: Story = () => (
  <Banner type="warning" icon={<Icon type="user" size="medium" />}>
    Banner with custom icon
  </Banner>
)

export const WithClickHandler: Story = () => (
  <Banner onClick={() => console.log('Banner clicked!')}>Banner with click handler</Banner>
)

export const WithNestedChildElements: Story = () => (
  <Banner>
    Banner with nested child elements.{' '}
    <div
      style={{ color: 'black', fontWeight: 'bold', textDecoration: 'underline', display: 'inline', cursor: 'pointer' }}
      onClick={() => console.log('Nested element clicked!')}
    >
      Click Here
    </div>
  </Banner>
)

export default { title: 'UI/Molecules/Banner' }
