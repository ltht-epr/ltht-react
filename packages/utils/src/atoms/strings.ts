/**
 * Parses the given input string into a normalised ID string.
 *
 * The function performs the following transformations:
 * - Converts the input to lowercase.
 * - Removes commas, colons, semicolons, and apostrophes.
 * - Replaces ampersands (&) and slashes (/) with dashes.
 * - Trims leading and trailing whitespace.
 * - Replaces one or more whitespace characters with a single dash (`-`).
 * - Collapses multiple consecutive dashes into a single dash.
 * - Removes leading and trailing dashes.
 *
 * @param input - The string to be parsed into an ID.
 * @returns The normalized ID string.
 */
const stringToHtmlId = (input: string): string => {
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string')
  }

  if (input.length === 0) {
    return ''
  }

  return input
    .toLowerCase()
    .replace(/[,:;']/g, '') // remove commas, colons, semicolons, apostrophes
    .replace(/[&/]/g, '-') // replace & and / with dashes
    .trim()
    .replace(/\s+/g, '-') // replace spaces (including multiple) with dashes
    .replace(/-+/g, '-') // collapse multiple dashes into one
    .replace(/^-|-$/g, '') // remove leading/trailing dashes
}

// eslint-disable-next-line import/prefer-default-export
export { stringToHtmlId }
