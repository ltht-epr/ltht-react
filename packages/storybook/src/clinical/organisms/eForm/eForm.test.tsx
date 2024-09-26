import { render, screen } from '@testing-library/react'
import EForm from '@ltht-react/eform/src'

describe('eForm', () => {
  it('Assigns checksum value to the iframe-key attribute', () => {
    const mockCallback = jest.fn()

    render(<EForm url="https://example.com/" callback={{ name: 'test', handler: mockCallback }} checksum={1} />)
    const initialIframeKey = screen.getByTitle('eForm').getAttribute('data-iframe-key')

    expect(initialIframeKey).toBe('1')
  })

  it('should put the id on the iframe', () => {
    render(<EForm url="https://localhost" id="test-iframe" />)

    expect(screen.getByTitle('eForm')).toHaveAttribute('id', 'test-iframe')
  })

  it('should have a default iframe id', () => {
    render(<EForm url="https://localhost" />)

    expect(screen.getByTitle('eForm')).toHaveAttribute('id', 'f4h-eform-iframe')
  })
})
