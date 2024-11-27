import { CodingDetail } from '@ltht-react/types'
import { Coding } from '@ltht-react/types'
import { render, screen } from '@testing-library/react'

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

  it('should show insufficient data message if the codings list is empty', () => {
    render(<CodingDetail term="Coding" coding={emptyCoding} />)

    expect(screen.getByText('Coding')).toBeVisible()
    expect(screen.getByText('Insufficient data provided.')).toBeVisible()
  })

  it('should show the term and no value if told to do so', async () => {
    render(<CodingDetail term="Coding" coding={emptyCoding} showIfEmpty />)

    expect(screen.getByText('Coding')).toBeVisible()
    expect(screen.queryByText('Insufficient data provided.')).toBeNull()
  })
})
