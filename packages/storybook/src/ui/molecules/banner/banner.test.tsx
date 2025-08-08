import { render, screen } from '@testing-library/react'

import Banner from '@ltht-react/banner'
import { createRef } from 'react'

describe('Banner', () => {
  it('Renders', () => {
    render(
      <Banner>
        <div>Child Element</div>
      </Banner>
    )

    expect(screen.getByText('Child Element')).toBeInTheDocument()
  })

  it('Renders with type "info"', () => {
    render(
      <Banner type="info">
        <div>Info Banner</div>
      </Banner>
    )
    const banner = screen.getByText('Info Banner')
    expect(banner).toBeInTheDocument()
  })

  it('Renders with a custom icon', () => {
    const CustomIcon = () => <span data-testid="custom-icon">Icon</span>
    render(
      <Banner icon={<CustomIcon />}>
        <div>Banner With Icon</div>
      </Banner>
    )
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
    expect(screen.getByText('Banner With Icon')).toBeInTheDocument()
  })

  it('Renders with type "warning"', () => {
    render(
      <Banner type="warning">
        <div>Warning Banner</div>
      </Banner>
    )
    const banner = screen.getByText('Warning Banner')
    expect(banner).toBeInTheDocument()
  })

  it('Renders with type "error"', () => {
    render(
      <Banner type="danger">
        <div>Error Banner</div>
      </Banner>
    )
    const banner = screen.getByText('Error Banner')
    expect(banner).toBeInTheDocument()
  })

  it('Passes additional HTML attributes', () => {
    render(
      <Banner data-testid="banner-test" aria-label="test-banner">
        <div>Attribute Banner</div>
      </Banner>
    )
    const banner = screen.getByTestId('banner-test')
    expect(banner).toHaveAttribute('aria-label', 'test-banner')
  })

  it('forwards ref to the root element', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <Banner ref={ref}>
        <div>Ref Banner</div>
      </Banner>
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
    expect(ref.current).toContainElement(screen.getByText('Ref Banner'))
  })
})
