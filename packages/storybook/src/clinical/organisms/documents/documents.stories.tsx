import { Story } from '@storybook/react'

import DocumentSummary from '@ltht-react/document-summary'
import Card from '@ltht-react/card'
import documents from './documents.fixture'

export const Summary: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Documents</Card.Title>
    </Card.Header>
    <Card.List>
      {documents.map((document) => (
        <Card.ListItem key={document.id}>
          <DocumentSummary document={document} />
        </Card.ListItem>
      ))}
    </Card.List>
  </Card>
)

export const Redacted: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Document</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <DocumentSummary document={documents[2]} />
      </Card.ListItem>
    </Card.List>
  </Card>
)

export default { title: 'Clinical/Organisms/Documents' }
