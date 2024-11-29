import { Coding } from '@ltht-react/types'
import { render, screen } from '@testing-library/react'
import { CodingDetail } from '@ltht-react/type-detail'

describe('CodingDetail', () => {
  const coding: Coding = {
    code: '1234',
    display: 'First coding',
  }

  const emptyCoding: Coding = {}

  it('should show title and coding if present', async () => {
    render(<CodingDetail term="Coding" coding={coding} />)

    expect(screen.getByText('Coding')).toBeVisible()
    expect(screen.getByText('First coding')).toBeVisible()
  })

  it('should show insufficient data message if no codings are present', () => {
    render(<CodingDetail term="Coding" />)

    expect(screen.getByText('Coding')).toBeVisible()
    expect(screen.getByText('Insufficient data provided.')).toBeVisible()
  })

  it('should show default fallback message if none provided and the codings list is empty', () => {
    render(<CodingDetail term="Coding" coding={emptyCoding} />)

    expect(screen.getByText('Coding')).toBeVisible()
    expect(screen.getByText('Insufficient data provided.')).toBeVisible()
  })

  it('should show custom fallback message if provided and the codings list is empty', async () => {
    render(<CodingDetail term="Coding" coding={emptyCoding} fallbackMessage="Unable to read value from coding" />)

    expect(screen.getByText('Coding')).toBeVisible()
    expect(screen.getByText('Unable to read value from coding')).toBeVisible()
  })

  it('should show the term and no value if told to do so', async () => {
    render(<CodingDetail term="Coding" coding={emptyCoding} showIfEmpty />)

    expect(screen.getByText('Coding')).toBeVisible()
    expect(screen.queryByText('Insufficient data provided.')).toBeNull()
  })
})
