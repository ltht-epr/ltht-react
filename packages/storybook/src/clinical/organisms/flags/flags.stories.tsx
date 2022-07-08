import { Story } from '@storybook/react'

import FlagDetail from '@ltht-react/flag-detail'
import FlagSummary from '@ltht-react/flag-summary'
import Card from '@ltht-react/card'

import { Button } from '@ltht-react/button'
import { DetailViewType } from '@ltht-react/types'
import { useDetailViewType } from '../hooks/useDetailViewTypeHook'
import flags from './flags.fixtures'

export const Detail: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Flag</Card.Title>
    </Card.Header>
    <Card.Body>
      <FlagDetail flag={flags[0]} />
    </Card.Body>
  </Card>
)

export const DetailsCollapsibleView: Story = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { viewType, toggle } = useDetailViewType()
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          Collapsible detail view{' '}
          <Button
            type="button"
            value={viewType === DetailViewType.Expanded ? 'View compacted' : 'View expanded'}
            onClick={toggle}
          />
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <FlagDetail flag={flags[1]} viewType={viewType} />
      </Card.Body>
    </Card>
  )
}

export const Summary: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Flags</Card.Title>
    </Card.Header>
    <Card.List>
      {flags.map(flag => (
        <Card.ListItem key={flag.id}>
          <FlagSummary flag={flag} />
        </Card.ListItem>
      ))}
    </Card.List>
  </Card>
)

export const Redacted: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Flag</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <FlagSummary flag={flags[0]} />
      </Card.ListItem>
    </Card.List>
  </Card>
)

export default { title: 'Clinical/Organisms/Flags' }
