import { Story } from '@storybook/react'

import Questionnaire from '@ltht-react/questionnaire'
import Card from '@ltht-react/card'

export const QuestionnaireStory: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Questionnaire</Card.Title>
    </Card.Header>
    <Card.Body>
      <Questionnaire />
    </Card.Body>
  </Card>
)

QuestionnaireStory.storyName = 'Questionnaire'

export default { title: 'Clinical/Organisms/Questionnaire' }
