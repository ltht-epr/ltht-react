import React from 'react'
import { Story } from '@storybook/react'

import EForm from '@ltht-react/eform'

export const Iframe: Story = () => <EForm url="https://www.wikipedia.org/" style={{ height: '95vh' }} />

export default { title: 'Clinical/Organisms/EForm' }
