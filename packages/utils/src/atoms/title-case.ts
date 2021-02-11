export const titleCase = (value: string): string => {
  if (!value || value.length === 0) {
    return ''
  }

  return value
    .toLowerCase()
    .split(/\s|_/)
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(' ')
}

export default titleCase
