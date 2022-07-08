export const titleCase = (value: string): string => {
  if (!value || value.length === 0) {
    return ''
  }

  return value
    .toLowerCase()
    .split(/\s|_/)
    .map(word => {
      if (word.length > 0) {
        return word.replace(word[0], word[0].toUpperCase())
      }
      return word
    })
    .join(' ')
}

export default titleCase
