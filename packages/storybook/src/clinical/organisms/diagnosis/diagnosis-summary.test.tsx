import { render, screen } from '@testing-library/react'
// import { PartialDateTimeKindCode } from '@ltht-react/types'
import DiagnosisSummary from '@ltht-react/diagnosis-summary'
import { Coding, Condition, Maybe } from '@ltht-react/types'
import {
  EXTENSION_TEMPLATE_DISPLAY_NAME,
  EXTENSION_TEMPLATE_VERSION,
} from '@ltht-react/diagnosis-summary/src/constants'
import { conditions } from './diagnosis.fixtures'

const findConditionMetadataTag = (condition: Condition, system: string): Maybe<Coding> | undefined =>
  condition?.metadata.tag?.find((coding) => coding?.system === system)

describe('Diagnosis Summary', () => {
  it('Renders', () => {
    const condition = conditions[0]

    const extensionTemplateDisplayName =
      findConditionMetadataTag(condition, EXTENSION_TEMPLATE_DISPLAY_NAME)?.display ?? ''

    const extensionTemplateVersion = findConditionMetadataTag(condition, EXTENSION_TEMPLATE_VERSION)?.display ?? ''

    render(
      <DiagnosisSummary
        condition={condition}
        extendedTemplateDisplayName={extensionTemplateDisplayName}
        extensionTemplateDisplayName={extensionTemplateVersion}
        extensionClickHandler={undefined}
        isReadOnly={false}
      />
    )

    expect(screen.getByText('Confirmed, Heel Pain: Adenocarcinoma, no subtype, Active')).toBeVisible()
    expect(screen.getByText('07-Aug-2018')).toBeVisible()
  })
})
