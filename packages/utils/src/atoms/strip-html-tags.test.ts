import stripHtmlTags from './strip-html-tags'

describe('stripHtmlTags', () => {
  it('should not modify a string without tags', () => {
    const input = 'This text has no HTML tags'
    const output = stripHtmlTags(input)

    expect(output).toEqual(input)
  })

  it('should return an empty string when nothing is passed', () => {
    const input = undefined
    const output = stripHtmlTags(input)

    expect(output).toBe('')
  })

  it('should strip a tag', () => {
    const value = 'The text'
    const input = `<p>${value}</p>`
    const output = stripHtmlTags(input)

    expect(output).toEqual(value)
  })

  it('should strip multiple tags', () => {
    const value = 'The text'
    const input = `<h3>${value}</h3><span>${value}</span>`
    const output = stripHtmlTags(input)

    expect(output).toEqual(`${value}${value}`)
  })
})
