import { Story } from '@storybook/react'
import AdminActions from '@ltht-react/admin-actions'

import Card from '@ltht-react/card'
import styled from '@emotion/styled'
import { AdminActionsList } from './admin-actions.fixtures'

const StyledCard = styled(Card)`
  border: 2px solid red;
  border-style: outset;
`

const StyledCardListItem = styled(Card.ListItem)`
  border-color: red;
`

const StyledCardList = styled(Card.List)`
  border-color: red;
`

const delay = (ms: number | undefined) => new Promise((res) => setTimeout(res, ms))

const yourFunction = async () => {
  await delay(1000)
  return true
}

export const TasksStory: Story = () => (
  <StyledCard>
    <Card.Header>
      <Card.Title>Admin Actions</Card.Title>
    </Card.Header>
    <StyledCardList>
      {AdminActionsList.map((task) => (
        <StyledCardListItem>
          <AdminActions task={task} actionClickHandler={yourFunction} />
        </StyledCardListItem>
      ))}
    </StyledCardList>
  </StyledCard>
)

export default { title: 'Clinical/Organisms/Admin Actions' }
