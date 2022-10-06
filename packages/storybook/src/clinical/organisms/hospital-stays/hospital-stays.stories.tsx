import { Story } from '@storybook/react'

import HospitalStayDetail from '@ltht-react/hospital-stay-detail'
import HospitalStaySummary from '@ltht-react/hospital-stay-summary'
import Card from '@ltht-react/card'
import { Button } from '@ltht-react/button'
import * as types from '@ltht-react/types'
import { useDetailViewType } from '../hooks/useDetailViewTypeHook'
import stays from './hospital-stays.fixtures'

export const Detail: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Hospital Stay</Card.Title>
    </Card.Header>
    <Card.Body>
      <HospitalStayDetail hospitalStay={stays[2]} />
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
            value={viewType === types.DetailViewType.Expanded ? 'View compacted' : 'View expanded'}
            onClick={toggle}
          />
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <HospitalStayDetail hospitalStay={stays[0]} viewType={viewType} />
      </Card.Body>
    </Card>
  )
}

export const Summary: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Hospital Stays</Card.Title>
    </Card.Header>
    <Card.List>
      {stays.map((stay) => (
        <Card.ListItem key={stay.id}>
          <HospitalStaySummary hospitalStay={stay} />
        </Card.ListItem>
      ))}
    </Card.List>
  </Card>
)

export const Redacted: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Hospital Stay</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <HospitalStaySummary hospitalStay={stays[1]} />
      </Card.ListItem>
    </Card.List>
  </Card>
)

export default { title: 'Clinical/Organisms/Hospital Stays' }
