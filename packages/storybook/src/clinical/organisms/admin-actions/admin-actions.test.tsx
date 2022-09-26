import AdminActions, { IAdminAction } from '@ltht-react/admin-actions'
import { render, screen, within } from '@testing-library/react'
import AdminActionsList from './admin-actions.fixtures'

describe('Admin Actions', () => {
  it('Perform action button is visible', () => {
    const adminAction: IAdminAction = {
      task: AdminActionsList[0],
      isSuccess: null,
      isLoading: false,
    }
    render(
      <AdminActions
        adminAction={adminAction}
        actionClickHandler={() => {
          // eslint-disable-next-line no-console
          console.log('Clicked')
        }}
      />
    )

    const button = screen.getByRole('button')
    expect(button).toBeVisible()
    const { queryByText } = within(screen.getByRole('button'))
    expect(queryByText('Perform Action')).toBeInTheDocument()
  })

  it('Loading is visible', () => {
    const adminAction: IAdminAction = {
      task: AdminActionsList[0],
      isSuccess: null,
      isLoading: true,
    }
    render(
      <AdminActions
        adminAction={adminAction}
        actionClickHandler={() => {
          // eslint-disable-next-line no-console
          console.log('Clicked')
        }}
      />
    )

    const button = screen.getByRole('button')
    expect(button).toBeVisible()
    const { queryByText } = within(screen.getByRole('button'))
    expect(queryByText('Loading')).toBeInTheDocument()
  })

  it('Success is visible', () => {
    const adminAction: IAdminAction = {
      task: AdminActionsList[0],
      isSuccess: true,
      isLoading: false,
    }
    render(
      <AdminActions
        adminAction={adminAction}
        actionClickHandler={() => {
          // eslint-disable-next-line no-console
          console.log('Clicked')
        }}
      />
    )

    const button = screen.getByRole('button')
    expect(button).toBeVisible()
    const { queryByText } = within(screen.getByRole('button'))
    expect(queryByText('Done')).toBeInTheDocument()
  })

  it('Failure is visible', () => {
    const adminAction: IAdminAction = {
      task: AdminActionsList[0],
      isSuccess: false,
      isLoading: false,
    }
    render(
      <AdminActions
        adminAction={adminAction}
        actionClickHandler={() => {
          // eslint-disable-next-line no-console
          console.log('Clicked')
        }}
      />
    )

    const button = screen.getByRole('button')
    expect(button).toBeVisible()
    const { queryByText } = within(screen.getByRole('button'))
    expect(queryByText('Failed - Please report to tech services')).toBeInTheDocument()
  })
})
