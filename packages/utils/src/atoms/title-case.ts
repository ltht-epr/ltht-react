const titleCase = (value: string): string => {
  if (!value || value.length == 0) {
    return ''
  }

  const titleCased = value
    .toLowerCase()
    .split(/\s|_/)
    .map(function(word) {
      return word.replace(word[0], word[0].toUpperCase())
    })
    .join(' ')

  return titleCased
}

export { titleCase }
