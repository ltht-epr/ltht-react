import { render, screen } from '@testing-library/react'

import Banner from '@ltht-react/banner'

describe('Banner', () => {
  it('Renders', () => {
    render(
      <Banner>
        <div>Child Element</div>
      </Banner>
    )

    expect(screen.getByText('Child Element')).toBeInTheDocument()
  })
})
