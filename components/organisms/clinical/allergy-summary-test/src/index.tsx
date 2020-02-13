import React from 'react'

import { AllergyIntolerance } from '@ltht-react/types'
import AllergySummaryItem from '@ltht-react/allergy-summary-item'
import { Widget, WidgetHeader, WidgetList, WidgetListItem } from '@ltht-react/widget'

const AllergySummaryTest: React.FC<Props> = ({ title = 'Allergies', allergies = [], clickHandler }) => {
  return (
    <Widget noData={allergies.length === 0}>
      <WidgetHeader>
        <h3>{title}</h3>
      </WidgetHeader>
      {/* <WidgetBody>
        <UnorderedList>
          <ListItem>
            <Grid>
              <Row>
                <Column>Icon</Column>
                <Column>Icon</Column>
                <Column>
                  <Row>
                    <Column>Primary</Column>
                  </Row>
                </Column>
              </Row>
            </Grid>
          </ListItem>
        </UnorderedList>
      </WidgetBody> */}
      <WidgetList clickable={!!clickHandler}>
        {allergies.map(allergy => (
          <WidgetListItem key={allergy.id}>
            <AllergySummaryItem allergy={allergy} />
          </WidgetListItem>
        ))}
      </WidgetList>
    </Widget>
  )
}

interface Props {
  title?: string
  allergies: AllergyIntolerance[] | undefined
  clickHandler?(allergy: AllergyIntolerance): void
}

export default AllergySummaryTest
