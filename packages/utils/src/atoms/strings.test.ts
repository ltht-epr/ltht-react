import { stringToId } from './strings'

describe('stringToId', () => {
  it('should convert all characters to lowercase', () => {
    expect(stringToId('ABCdef')).toBe('abcdef')
  })

  it('should remove commas, colons, semicolons, and apostrophes', () => {
    expect(stringToId("Hello, world: it's; me")).toBe('hello-world-its-me')
  })

  it('should replace ampersands and slashes with dashes', () => {
    expect(stringToId('A & B / C')).toBe('a-b-c')
  })

  it('should trim leading and trailing whitespace', () => {
    expect(stringToId('   hello world   ')).toBe('hello-world')
  })

  it('should replace multiple spaces with a single dash', () => {
    expect(stringToId('hello    world')).toBe('hello-world')
  })

  it('should collapse multiple consecutive dashes into one', () => {
    expect(stringToId('hello & / world')).toBe('hello-world')
  })

  it('should remove leading and trailing dashes', () => {
    expect(stringToId(' /hello world/ ')).toBe('hello-world')
  })

  it('should return an empty string for empty input', () => {
    expect(stringToId('')).toBe('')
  })

  it('should return an empty string for input with only removable characters', () => {
    expect(stringToId(",:;'&/")).toBe('')
  })

  it('should return an empty string for input with only spaces', () => {
    expect(stringToId('     ')).toBe('')
  })

  it('should handle strings with multiple special characters and spaces', () => {
    expect(stringToId("  Foo & Bar: The / 'Best' ; ")).toBe('foo-bar-the-best')
  })

  it('should not add dashes for removed characters at the start or end', () => {
    expect(stringToId("';Hello;'")).toBe('hello')
  })

  it('should handle strings with numbers', () => {
    expect(stringToId('Test 123 & 456')).toBe('test-123-456')
  })

  it('should handle strings with mixed special characters and numbers', () => {
    expect(stringToId('A/B;C:1,2&3')).toBe('a-bc12-3')
  })
})
