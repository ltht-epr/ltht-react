import { render, screen } from '@testing-library/react'
import EForm from '@ltht-react/eform/src'

describe('eForm', () => {
  it('Assigns checksum value to the iframe-key attribute', () => {
    const mockCallback = jest.fn()

    render(<EForm url="https://example.com/" callback={{ name: 'test', handler: mockCallback }} checksum={1} />)
    const initialIframeKey = screen.getByTitle('eForm').getAttribute('data-iframe-key')

    expect(initialIframeKey).toBe('1')
  })
})
