import parse from 'html-react-parser'

const parseHTML = (html?: string): string | JSX.Element | JSX.Element[] => (html ? parse(html) : <></>)

export default parseHTML
