import { render, screen } from '@testing-library/react'
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

  describe('Display data source when present and displaySource is true', () => {
    it('Renders', () => {
      const condition = conditions[0]
      condition.metadata.dataSources[0] = { display: 'Humber Teaching NHS Foundation Trust' }

      render(<DiagnosisSummary condition={condition} displaySource isReadOnly />)

      expect(screen.getByText('Source: Humber Teaching NHS Foundation Trust')).toBeVisible()
    })
  })

  describe('Hides data source when present and displaySource is false', () => {
    it('Renders', () => {
      const condition = conditions[0]
      condition.metadata.dataSources[0] = { display: 'Humber Teaching NHS Foundation Trust' }

      render(<DiagnosisSummary condition={condition} displaySource={false} isReadOnly />)

      expect(screen.queryByText('Source: Humber Teaching NHS Foundation Trust')).toBeNull()
    })
  })

  describe('Allow filtering by coding system for conditions displayed in summary', () => {
    it('Filters out condition codes from the Diagnosis Summary text that match a given coding system to filter', () => {
      const condition = conditions[2]
      condition.code = {
        coding: [
          { code: '3135009', display: 'Transient ischemic attack', system: 'http://snomed.info/sct' },
          { code: '62914000', display: 'Cerebrovascular disease', system: 'http://alternate-snomed-code' },
        ],
        text: 'Transient ischemic attack',
      }

      const codingSystemExclusions = ['http://alternate-snomed-code']

      render(
        <DiagnosisSummary
          condition={condition}
          displaySource={false}
          isReadOnly
          systemExclusionsFilter={codingSystemExclusions}
        />
      )

      expect(screen.getByText('Transient Ischemic Attack, Active, Entered In Error')).toBeVisible()
    })

    it('Renders all condition code texts when no coding system filter is specified', () => {
      const condition = conditions[2]
      render(<DiagnosisSummary condition={condition} displaySource={false} isReadOnly />)

      expect(
        screen.getByText('Transient Ischemic Attack, Cerebrovascular Disease, Active, Entered In Error')
      ).toBeVisible()
    })
  })
})
