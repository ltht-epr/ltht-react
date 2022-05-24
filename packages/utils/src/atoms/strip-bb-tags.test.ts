import stripBBTags from './strip-bb-tags'

describe('stripBBTags', () => {
  it('should not modify a string without tags', () => {
    const input = 'This text has no BB tags'
    const output = stripBBTags(input)

    expect(output).toEqual(input)
  })

  it('should return an empty string when nothing is passed', () => {
    const input = undefined
    const output = stripBBTags(input)

    expect(output).toBe('')
  })

  it('should strip a tag', () => {
    const value = 'The text'
    const input = `[b]${value}[/b]`
    const output = stripBBTags(input)

    expect(output).toEqual(value)
  })

  it('should strip multiple tags', () => {
    const value = 'The text'
    const input = `[i]${value}[/i][b]${value}[/b]`
    const output = stripBBTags(input)

    expect(output).toEqual(`${value}${value}`)
  })
})
