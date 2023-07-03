import styled from '@emotion/styled'
import Icon from '@ltht-react/icon/src/organisms/icon'
import { IconType, iconTypes } from '@ltht-react/styles'
import { render, screen } from '@testing-library/react'

const PinkIcon = styled(Icon)`
  color: pink;
`

describe('All icons', () => {
  it.each(iconTypes)("'%s' renders", (iconType: IconType) => {
    render(<Icon type={iconType} size="small" />)
  })

  it.each(iconTypes)("'%s' has the right class name", (iconType: IconType) => {
    const expectedClass = `icon__${iconType.toString()}`
    render(<Icon type={iconType} size="small" />)

    expect(screen.getByRole('img', { hidden: true })).toHaveClass(expectedClass)
  })

  it.each(iconTypes)("'%s' Still has the right class name when given custom class names", (iconType: IconType) => {
    const extraClass = 'further-maths'
    const expectedClass = `icon__${iconType}`

    render(<Icon type={iconType} size="small" className={extraClass} />)
    expect(screen.getByRole('img', { hidden: true })).toHaveClass(expectedClass)
    expect(screen.getByRole('img', { hidden: true })).toHaveClass(extraClass)
  })

  it.each(iconTypes)("'%s' Spreads html attributes down", (iconType: IconType) => {
    const id = '123abc'
    render(<Icon type={iconType} size="small" id={id} />)

    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('id', id)
  })

  it.each(iconTypes)("'%s' can be styled", (iconType: IconType) => {
    const expectedClass = `icon__${iconType}`

    render(<PinkIcon type={iconType} status="green" size="small" />)

    const icons = document.getElementsByClassName(expectedClass)
    const style = window.getComputedStyle(icons[0])

    expect(style.color).toBe('pink')
  })
})
