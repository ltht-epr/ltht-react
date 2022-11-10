import Card from '@ltht-react/card'
import { Story } from '@storybook/react'
import PlanDefinitionEditor, { OnProblemChange } from '@ltht-react/plan-definition-editor'
import { planDefinition } from './plan-definition-editor.fixtures'
import { useState } from 'react'

export const Editor: Story = () => {
  const [selectedProblemIds, setSelectedProblemIds] = useState<string[]>([])

  const handleProblemChange: OnProblemChange = (e) => {
    console.log('onProblemChange', e)
    let newProblemIds = [...selectedProblemIds]

    for (const problemChange of e) {
      if (problemChange.state === true) {
        newProblemIds = Array.from(new Set([...newProblemIds, problemChange.problemId]))
      } else {
        const existingItemIndex = newProblemIds.findIndex((x) => x === problemChange.problemId)
        if (existingItemIndex > -1) {
          newProblemIds = [...newProblemIds.slice(0, existingItemIndex), ...newProblemIds.slice(existingItemIndex + 1)]
        }
      }
    }

    setSelectedProblemIds(newProblemIds)
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
