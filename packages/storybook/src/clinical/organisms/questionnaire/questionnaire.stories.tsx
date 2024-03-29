import { Story } from '@storybook/react'

import Questionnaire from '@ltht-react/questionnaire'
import Card from '@ltht-react/card'

import { DetailViewType } from '@ltht-react/types'
import { Button } from '@ltht-react/button'
import {
  BooleanFieldData,
  DisplayFieldData,
  NoAnswerData,
  TextFieldData,
  GroupTypeData,
  DateFieldData,
  RichTextFieldData,
  AuthorInfoData,
  RepeatingGroupsExampleData,
  NestedGroupWithDisplayExampleData,
  ComposedExampleData,
  RedactedExampleData,
  NestedDischargeExample,
  DischargeClinicalSummaryExampleData,
  MissingAnswersExampleData,
  DischargeDestinationExampleData,
} from './questionnaire.fixtures'
import { useDetailViewType } from '../hooks/useDetailViewTypeHook'

export const TextField: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Questionnaire</Card.Title>
    </Card.Header>
    <Card.Body>
      <Questionnaire questionnaire={TextFieldData} />
    </Card.Body>
  </Card>
)

export const AuthorInfo: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Questionnaire</Card.Title>
    </Card.Header>
    <Card.Body>
      <Questionnaire questionnaire={AuthorInfoData} />
    </Card.Body>
  </Card>
)

export const RichTextField: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Questionnaire</Card.Title>
    </Card.Header>
    <Card.Body>
      <Questionnaire questionnaire={RichTextFieldData} />
    </Card.Body>
  </Card>
)

export const DateField: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Questionnaire</Card.Title>
    </Card.Header>
    <Card.Body>
      <Questionnaire questionnaire={DateFieldData} />
    </Card.Body>
  </Card>
)

export const BooleanField: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Questionnaire</Card.Title>
    </Card.Header>
    <Card.Body>
      <Questionnaire questionnaire={BooleanFieldData} />
    </Card.Body>
  </Card>
)

export const Statement: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Questionnaire</Card.Title>
    </Card.Header>
    <Card.Body>
      <Questionnaire questionnaire={DisplayFieldData} />
    </Card.Body>
  </Card>
)

export const GroupedQuestions: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Questionnaire</Card.Title>
    </Card.Header>
    <Card.Body>
      <Questionnaire questionnaire={GroupTypeData} />
    </Card.Body>
  </Card>
)

export const NoAnswer: Story = () => {
  const { viewType, toggle } = useDetailViewType()

  return (
    <Card>
      <Card.Header>
        <Card.Title>Questionnaire</Card.Title>{' '}
        <Button
          type="button"
          value={viewType === DetailViewType.Expanded ? 'View compacted' : 'View expanded'}
          onClick={toggle}
        />
      </Card.Header>
      <Card.Body>
        <Questionnaire questionnaire={NoAnswerData} viewType={viewType} />
      </Card.Body>
    </Card>
  )
}

export const RepeatingGroups: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Questionnaire</Card.Title>
    </Card.Header>
    <Card.Body>
      <Questionnaire questionnaire={RepeatingGroupsExampleData} />
    </Card.Body>
  </Card>
)

export const NestedGroupsWithDisplay: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Questionnaire</Card.Title>
    </Card.Header>
    <Card.Body>
      <Questionnaire questionnaire={NestedGroupWithDisplayExampleData} />
    </Card.Body>
  </Card>
)

export const ComposedExample: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Questionnaire</Card.Title>
    </Card.Header>
    <Card.Body>
      <Questionnaire questionnaire={ComposedExampleData} />
    </Card.Body>
  </Card>
)
export const DischargeActionsExample: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Questionnaire</Card.Title>
    </Card.Header>
    <Card.Body>
      <Questionnaire questionnaire={NestedDischargeExample} />
    </Card.Body>
  </Card>
)

export const CompactExample: Story = () => {
  const { viewType, toggle } = useDetailViewType()
  return (
    <Card>
      <Card.Header>
        <Card.Title>Questionnaire</Card.Title>{' '}
        <Button
          type="button"
          value={viewType === DetailViewType.Expanded ? 'View compacted' : 'View expanded'}
          onClick={toggle}
        />
      </Card.Header>
      <Card.Body>
        <Questionnaire questionnaire={MissingAnswersExampleData} viewType={viewType} />
      </Card.Body>
    </Card>
  )
}

export const RedactedExample: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Questionnaire</Card.Title>
    </Card.Header>
    <Card.Body>
      <Questionnaire questionnaire={RedactedExampleData} />
    </Card.Body>
  </Card>
)

export const DischargeClinicalSummaryExample: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Questionnaire</Card.Title>
    </Card.Header>
    <Card.Body>
      <Questionnaire questionnaire={DischargeClinicalSummaryExampleData} />
    </Card.Body>
  </Card>
)

export const DischargeDestinationExample: Story = () => {
  const { viewType, toggle } = useDetailViewType()
  return (
    <Card>
      <Card.Header>
        <Card.Title>Questionnaire</Card.Title>{' '}
        <Button
          type="button"
          value={viewType === DetailViewType.Expanded ? 'View compacted' : 'View expanded'}
          onClick={toggle}
        />
      </Card.Header>
      <Card.Body>
        <Questionnaire questionnaire={DischargeDestinationExampleData} viewType={viewType} />
      </Card.Body>
    </Card>
  )
}

export default { title: 'Clinical/Organisms/Questionnaire' }
