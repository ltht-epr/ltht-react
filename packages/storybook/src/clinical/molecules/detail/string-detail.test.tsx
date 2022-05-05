import { render, screen } from '@testing-library/react'
import { StringDetail } from '@ltht-react/type-detail'

describe('StringDetail', () => {
  it('Should show the term and details if availabile', async () => {
    render(<StringDetail term="String detail" description="The description" />)

    await screen.findByText('String detail')
    await screen.findByText('The Description')
  })

  it('should show nothing if no detail is passed', () => {
    render(<StringDetail term="String detail" />)

    expect(screen.queryByText('String detail')).toBeNull()
  })
})
