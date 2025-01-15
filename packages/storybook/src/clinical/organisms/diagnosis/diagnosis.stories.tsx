import { Story } from '@storybook/react'

import DiagnosisSummary from '@ltht-react/diagnosis-summary'
import DiagnosisDetail from '@ltht-react/diagnosis-detail'
import Card from '@ltht-react/card'
import { Button } from '@ltht-react/button'
import { DetailViewType } from '@ltht-react/types'
import { useDetailViewType } from '../hooks/useDetailViewTypeHook'
import { conditions, controls, tags } from './diagnosis.fixtures'

const CODABLE_CONCEPT_LINK_MAP = {
  'Heel Pain': 'https://www.google.com',
  'Base of phalanx of foot': 'https://www.google.com',
  'Subcutaneous tissue of lateral border of sole of foot': 'https://www.google.com',
}

export const Summary: Story = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const clickHandler = (): void => {}

  return (
    <Card>
      <Card.Header>
        <Card.Title>Problems & Diagnosis</Card.Title>
      </Card.Header>
      <Card.List>
        {conditions.map((condition, idx) => (
          <Card.ListItem key={condition.id} onClick={clickHandler}>
            {idx === 0 && (
              <DiagnosisSummary
                isReadOnly
                condition={condition}
                extendedTemplateDisplayName="Diagnosis Generic Cancer Level Two"
                displaySource
              />
            )}
            {idx === 1 && (
              <DiagnosisSummary
                condition={condition}
                extensionTemplateDisplayName="Diagnosis Generic Cancer Level Two"
                extensionClickHandler={clickHandler}
                isReadOnly={false}
                tags={tags}
                controls={controls}
                displaySource
              />
            )}
            {idx === 2 && <DiagnosisSummary condition={condition} isReadOnly={false} />}
            {idx === 3 && (
              <DiagnosisSummary
                condition={condition}
                extensionTemplateDisplayName="Diagnosis Generic Cancer Level Three"
                extendedTemplateDisplayName="Diagnosis Generic Cancer Level Two"
                extensionClickHandler={clickHandler}
                isReadOnly={false}
                controls={[controls[0]]}
                tags={[tags[0]]}
              />
            )}
            {idx === 4 && <DiagnosisSummary condition={condition} isReadOnly={false} />}
            {idx === 5 && (
              <DiagnosisSummary
                condition={condition}
                extensionTemplateDisplayName="Diagnosis Generic Cancer Level Two"
                extensionClickHandler={clickHandler}
                isReadOnly
                controls={controls}
                tags={[tags[0]]}
              />
            )}
          </Card.ListItem>
        ))}
      </Card.List>
    </Card>
  )
}

export const Redacted: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Problems & Diagnosis</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>
        <DiagnosisSummary condition={conditions[0]} isReadOnly={false} />
      </Card.ListItem>
    </Card.List>
  </Card>
)

export const LevelOneDetail: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title style={{ textAlign: 'center' }}>Diagnosis</Card.Title>
    </Card.Header>
    <Card.Body>
      <DiagnosisDetail condition={conditions[1]} links={CODABLE_CONCEPT_LINK_MAP} />
    </Card.Body>
  </Card>
)

export const LevelOneDetailNoSnippet: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title style={{ textAlign: 'center' }}>Diagnosis</Card.Title>
    </Card.Header>
    <Card.Body>
      <DiagnosisDetail condition={conditions[6]} links={CODABLE_CONCEPT_LINK_MAP} />
    </Card.Body>
  </Card>
)

export const LevelOneDetailsCollapsibleView: Story = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { viewType, toggle } = useDetailViewType()
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          Collapsible detail view{' '}
          <Button
            type="button"
            value={viewType === DetailViewType.Expanded ? 'View compacted' : 'View expanded'}
            onClick={toggle}
          />
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <DiagnosisDetail condition={conditions[4]} links={CODABLE_CONCEPT_LINK_MAP} viewType={viewType} />
      </Card.Body>
    </Card>
  )
}

export const LevelOneDetail2: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title style={{ textAlign: 'center' }}>Diagnosis</Card.Title>
    </Card.Header>
    <Card.Body>
      <DiagnosisDetail condition={conditions[2]} />
    </Card.Body>
  </Card>
)

export const LevelTwoDetail: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title style={{ textAlign: 'center' }}>Diagnosis</Card.Title>
    </Card.Header>
    <Card.Body>
      <DiagnosisDetail condition={conditions[0]} links={CODABLE_CONCEPT_LINK_MAP} />
    </Card.Body>
  </Card>
)

export const LevelTwoDetailsCollapsibleView: Story = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { viewType, toggle } = useDetailViewType()
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          Collapsible detail view{' '}
          <Button
            type="button"
            value={viewType === DetailViewType.Expanded ? 'View compacted' : 'View expanded'}
            onClick={toggle}
          />
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <DiagnosisDetail condition={conditions[0]} links={CODABLE_CONCEPT_LINK_MAP} viewType={viewType} />
      </Card.Body>
    </Card>
  )
}

export default { title: 'Clinical/Organisms/Diagnosis' }
