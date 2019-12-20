import { PatientResource } from '@ltht-react/types'

const Print = (input: PatientResource) => console.log('hello, ', input.firstName)

const Log = (input: string) => console.log('string test', input)

export default Print

export { Log }
