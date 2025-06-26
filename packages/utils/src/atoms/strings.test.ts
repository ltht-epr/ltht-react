import { stringToHtmlId } from './strings'

describe('stringToHtmlId', () => {
  it('should convert all characters to lowercase', () => {
    expect(stringToHtmlId('ABCdef')).toBe('abcdef')
  })

  it('should remove commas, colons, semicolons, and apostrophes', () => {
    expect(stringToHtmlId("Hello, world: it's; me")).toBe('hello-world-its-me')
  })

  it('should replace ampersands and slashes with dashes', () => {
    expect(stringToHtmlId('A & B / C')).toBe('a-b-c')
  })

  it('should trim leading and trailing whitespace', () => {
    expect(stringToHtmlId('   hello world   ')).toBe('hello-world')
  })

  it('should replace multiple spaces with a single dash', () => {
    expect(stringToHtmlId('hello    world')).toBe('hello-world')
  })

  it('should collapse multiple consecutive dashes into one', () => {
    expect(stringToHtmlId('hello & / world')).toBe('hello-world')
  })

  it('should remove leading and trailing dashes', () => {
    expect(stringToHtmlId(' /hello world/ ')).toBe('hello-world')
  })

  it('should return an empty string for empty input', () => {
    expect(stringToHtmlId('')).toBe('')
  })

  it('should return an empty string for input with only removable characters', () => {
    expect(stringToHtmlId(",:;'&/")).toBe('')
  })

  it('should return an empty string for input with only spaces', () => {
    expect(stringToHtmlId('     ')).toBe('')
  })

  it('should handle strings with multiple special characters and spaces', () => {
    expect(stringToHtmlId("  Foo & Bar: The / 'Best' ; ")).toBe('foo-bar-the-best')
  })

  it('should not add dashes for removed characters at the start or end', () => {
    expect(stringToHtmlId("';Hello;'")).toBe('hello')
  })

  it('should handle strings with numbers', () => {
    expect(stringToHtmlId('Test 123 & 456')).toBe('test-123-456')
  })

  it('should handle strings with mixed special characters and numbers', () => {
    expect(stringToHtmlId('A/B;C:1,2&3')).toBe('a-bc12-3')
  })
})
