import { render, screen } from '@testing-library/react'
import EForm from '@ltht-react/eform/src'

describe('eForm', () => {
  it('Increments iframeKey to trigger iframe refresh, when forceRefresh is true', () => {
    const mockCallback = jest.fn()

    const { rerender } = render(<EForm url="https://example.com/" callback={{ name: 'test', handler: mockCallback }} />)
    const initialIframeKey = screen.getByTitle('eForm').getAttribute('data-iframe-key')

    rerender(<EForm url="https://example.com/" callback={{ name: 'test', handler: mockCallback }} forceRefresh />)
    const updatedIframeKey = screen.getByTitle('eForm').getAttribute('data-iframe-key')

    expect(updatedIframeKey).not.toBe(initialIframeKey)
  })

  it('Does not increment iframeKey, when forceRefresh is false', () => {
    const mockCallback = jest.fn()

    const { rerender } = render(<EForm url="https://example.com/" callback={{ name: 'test', handler: mockCallback }} />)
    const initialIframeKey = screen.getByTitle('eForm').getAttribute('data-iframe-key')

    rerender(<EForm url="https://example.com/" callback={{ name: 'test', handler: mockCallback }} />)
    const updatedIframeKey = screen.getByTitle('eForm').getAttribute('data-iframe-key')

    expect(updatedIframeKey).toBe(initialIframeKey)
  })
})
