import Card from '@ltht-react/card'
import { Story } from '@storybook/react'
import PlanDefinitionEditor, { OnProblemChange } from '@ltht-react/plan-definition-editor'
import { planDefinition } from './plan-definition-editor.fixtures'
import { useState } from 'react'

export const Editor: Story = () => {
  const [selectedProblemIds, setSelectedProblemIds] = useState<string[]>([])

  const handleProblemChange: OnProblemChange = (e) => {
    console.log('problem change', e)
    setSelectedProblemIds(e.filter((x) => x.state === true).map((x) => x.problemId))
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title>Plan definition</Card.Title>
      </Card.Header>
      <Card.Body>
        <PlanDefinitionEditor
          planDefinition={planDefinition}
          onProblemChange={handleProblemChange}
          selectedProblemIds={selectedProblemIds}
        />
      </Card.Body>
    </Card>
  )
}

export default { title: 'Clinical/Organisms/Plan Definition Editor' }
