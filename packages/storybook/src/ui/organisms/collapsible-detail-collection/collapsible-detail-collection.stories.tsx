import Card from '@ltht-react/card'
import DiagnosisDetail from '@ltht-react/diagnosis-detail'
import { CollapsibleDetailCollection, StringDetail } from '@ltht-react/type-detail'
import { DetailViewType } from '@ltht-react/types'
import { StoryFn } from '@storybook/react'

import { Hemophilia } from './collapsible-detail-collection.fixtures'

export const Expanded: StoryFn = () => {
  const showExtraDetails = false

  return (
    <Card>
      <Card.Header>
        <Card.Title>Expanded collection view</Card.Title>
      </Card.Header>
      <Card.Body>
        <p>
          Expanded view will show every Detail component, regardless of whether it has a value or not. This means that
          the Detail component will just show the term
        </p>
        <CollapsibleDetailCollection viewType={DetailViewType.Expanded}>
          <DiagnosisDetail condition={Hemophilia} viewType={DetailViewType.Expanded} />
          {showExtraDetails && <StringDetail term="Extra Details" />}
        </CollapsibleDetailCollection>
      </Card.Body>
    </Card>
  )
}

export const Compact: StoryFn = () => (
  <Card>
    <Card.Header>
      <Card.Title>Compact collection view</Card.Title>
    </Card.Header>
    <Card.Body>
      <p>
        Compact view will show any Detail component that has a value. Detail components without values will not be
        rendered
      </p>
      <CollapsibleDetailCollection viewType={DetailViewType.Compact}>
        <DiagnosisDetail condition={Hemophilia} viewType={DetailViewType.Compact} />
      </CollapsibleDetailCollection>
    </Card.Body>
  </Card>
)

export default { title: 'UI/Organisms/Collapsible detail collection' }
