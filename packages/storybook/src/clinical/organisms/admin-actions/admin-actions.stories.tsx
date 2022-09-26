import { Story } from '@storybook/react'
import AdminActions, { IAdminAction } from '@ltht-react/admin-actions'

import Card from '@ltht-react/card'
import styled from '@emotion/styled'
import { useState } from 'react'
import AdminActionsList from './admin-actions.fixtures'

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

export const TasksStory: Story = () => {
  const [adminActions, setAdminActions] = useState<IAdminAction[]>(
    AdminActionsList.map((x) => ({
      task: x,
      isSuccess: null,
      isLoading: false,
      failText: 'Failed - Please report to tech services',
    }))
  )

  function onSuccess() {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve('Mail has arrived')
      } else {
        reject(new Error('Failed to arrive'))
      }
    })
  }

  const clickHandler = (adminAction: IAdminAction) => {
    const newAdminActions = [...adminActions]
    const actionUpdate = newAdminActions.find((x) => x?.task.id === adminAction.task.id)
    if (actionUpdate) {
      actionUpdate.isLoading = true
      setAdminActions(newAdminActions)
      setTimeout(
        () =>
          onSuccess()
            .then(() => {
              const newAdminActions = [...adminActions]
              const actionUpdate = newAdminActions.find((x) => x?.task.id === adminAction.task.id)
              if (actionUpdate) {
                actionUpdate.isLoading = false
                actionUpdate.isSuccess = true
                setAdminActions(newAdminActions)
              }
            })
            .catch(() => {
              const newAdminActions = [...adminActions]
              const actionUpdate = newAdminActions.find((x) => x?.task.id === adminAction.task.id)
              if (actionUpdate) {
                actionUpdate.isLoading = false
                actionUpdate.isSuccess = false
                setAdminActions(newAdminActions)
              }
            }),
        1000
      )
    }
  }

  return (
    <StyledCard>
      <Card.Header>
        <Card.Title>Admin Actions</Card.Title>
      </Card.Header>
      <StyledCardList>
        {adminActions.map((adminAction) => (
          <StyledCardListItem>
            <AdminActions adminAction={adminAction} actionClickHandler={clickHandler} />
          </StyledCardListItem>
        ))}
      </StyledCardList>
    </StyledCard>
  )
}

export default { title: 'Clinical/Organisms/Admin Actions' }
