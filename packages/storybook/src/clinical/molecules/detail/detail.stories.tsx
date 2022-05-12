import { Story } from '@storybook/react'

import {
  AnnotationListDetail,
  CodeableConceptDetail,
  DatetimeDetail,
  NarrativeDetail,
  NestedListDetail,
  PeriodDetail,
  ResourceReferenceDetail,
  StringDetail,
} from '@ltht-react/type-detail'
import * as fixtures from './detail.fixtures'

export const Annotations: Story = () => <AnnotationListDetail term="Note(s)" notes={fixtures.annotations} />
export const CodeableConcept: Story = () => <CodeableConceptDetail term="Code" concept={fixtures.codeableConcept} />
export const DateTime: Story = () => <DatetimeDetail term="Start Date" datetime={fixtures.partialDateTime} />
export const Narrative: Story = () => <NarrativeDetail narrative={fixtures.narrative} />
export const Period: Story = () => <PeriodDetail period={fixtures.period} />
export const String: Story = () => <StringDetail term="Term" description="description test" />
export const ResourceReference: Story = () => (
  <ResourceReferenceDetail term="Author" resourceReference={fixtures.resourceReference} />
)
export const NestedList: Story = () => (
  <NestedListDetail term="Definition list term" wrapDescription showIfEmpty>
    Definition list description
  </NestedListDetail>
)

export default { title: 'Clinical/Molecules/Detail' }
