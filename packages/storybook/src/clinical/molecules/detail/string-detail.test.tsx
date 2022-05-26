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

  it('should show the term when no description and told to', async () => {
    render(<StringDetail term="String detail" showIfEmpty />)

    await screen.findByText('String detail')
  })

  it('should not add full width class under 150 chars', () => {
    const { container } = render(<StringDetail term="String detail" description="This is under 150 characters" />)

    expect(container.querySelector('dl')).not.toHaveClass('string-detail--full-width')
  })

  it('should add full width class over 150 chars', () => {
    const { container } = render(
      <StringDetail
        term="String detail"
        description="This text is over 150 characters long so that we can safely say that we're adding the right class to make this go flex-basis: 100%. Here's hoping it works!"
      />
    )

    expect(container.querySelector('dl')).toHaveClass('string-detail--full-width')
  })
})
