import { Flag } from '@ltht-react/types'

const Print = (input: Flag) => console.log('hello, ', input && input.author && input.author.display)

const Log = (input: string) => console.log('string test', input)

export default Print

export { Log }
