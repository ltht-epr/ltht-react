import Card from '@ltht-react/card'
import { parseHTML } from '@ltht-react/utils'
import { Story } from '@storybook/react'

export const HTMLStringToReact: Story = () => {
  const html = `<div style="margin: 10px 0; border: 1px solid black; padding: 10px">
  <b>Example Bold Title</b>
    <p style="color: red">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Tincidunt nunc pulvinar sapien et.
    </p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
    </ul>
  </div>`

  return (
    <Card>
      <Card.Header>Parse HTML String</Card.Header>
      <Card.Body>
        <h3>Raw HTML</h3>
        <div style={{ backgroundColor: '#d8d8d8', padding: 10 }}>{html}</div>

        <h3>Parsed HTML</h3>
        {parseHTML(html)}
      </Card.Body>
    </Card>
  )
}

export default { title: 'UI/Atoms/ParseHTML' }
