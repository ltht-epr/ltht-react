import AdminActions, { IAdminAction } from '@ltht-react/admin-actions'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AdminActionsList from './admin-actions.fixtures'

const failureText = 'Failed - Please report to tech services'

describe('Admin Actions', () => {
  it('Perform action button is visible', () => {
    const adminAction: IAdminAction = {
      task: AdminActionsList[0],
      isSuccess: null,
      isLoading: false,
      failText: failureText,
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
      failText: failureText,
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

  it('Invokes the click handler when clicked', async () => {
    const mockClickHandler = jest.fn()

    const adminAction: IAdminAction = {
      task: AdminActionsList[0],
      isSuccess: null,
      isLoading: false,
      failText: failureText,
    }
    render(<AdminActions adminAction={adminAction} actionClickHandler={mockClickHandler} />)

    await userEvent.click(screen.getByRole('button'))
    expect(mockClickHandler).toBeCalledTimes(1)
  })

  it('Does not invoke the click handler if clicked whilst loading', async () => {
    const mockClickHandler = jest.fn()

    const adminAction: IAdminAction = {
      task: AdminActionsList[0],
      isSuccess: null,
      isLoading: true,
      failText: failureText,
    }
    render(<AdminActions adminAction={adminAction} actionClickHandler={mockClickHandler} />)

    await userEvent.click(screen.getByRole('button'))
    expect(mockClickHandler).not.toHaveBeenCalled()
  })

  it('Does not invoke the click handler if clicked whilst failed', async () => {
    const mockClickHandler = jest.fn()

    const adminAction: IAdminAction = {
      task: AdminActionsList[0],
      isSuccess: false,
      isLoading: false,
      failText: failureText,
    }
    render(<AdminActions adminAction={adminAction} actionClickHandler={mockClickHandler} />)

    await userEvent.click(screen.getByRole('button'))
    expect(mockClickHandler).not.toHaveBeenCalled()
  })

  it('Does not invoke the click handler if clicked whilst already succeeded', async () => {
    const mockClickHandler = jest.fn()

    const adminAction: IAdminAction = {
      task: AdminActionsList[0],
      isSuccess: true,
      isLoading: false,
      failText: failureText,
    }
    render(<AdminActions adminAction={adminAction} actionClickHandler={mockClickHandler} />)

    await userEvent.click(screen.getByRole('button'))
    expect(mockClickHandler).not.toHaveBeenCalled()
  })

  it('Success is visible', () => {
    const adminAction: IAdminAction = {
      task: AdminActionsList[0],
      isSuccess: true,
      isLoading: false,
      failText: failureText,
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
      failText: failureText,
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
    expect(queryByText(failureText)).toBeInTheDocument()
  })
})
