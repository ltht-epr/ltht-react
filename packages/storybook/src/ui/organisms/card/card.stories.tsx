import { useRef } from 'react'
import { Story } from '@storybook/react'
import styled from '@emotion/styled'
import Card from '@ltht-react/card'
import { Button } from '@ltht-react/button'
import AllergySummary from '@ltht-react/allergy-summary'
import { Menu, MenuItem } from '@ltht-react/menu'
import { InfoSummary, WarningSummary, ErrorSummary, MissingDataSummary } from '@ltht-react/type-summary'
import allergies from '../../../clinical/organisms/allergies/allergies.fixtures'

const clickHandler = (): void => {
  // eslint-disable-next-line no-console
  console.log('Handler clicked')
}

export const Basic: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Header</Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Subtitle>Subtitle</Card.Subtitle>
      <Card.Text>Body Text</Card.Text>
    </Card.Body>
  </Card>
)

export const WithFooter: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Header</Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Subtitle>Subtitle</Card.Subtitle>
      <Card.Text>Body Text</Card.Text>
    </Card.Body>
    <Card.Footer>Footer</Card.Footer>
  </Card>
)

export const WithList: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Header</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem>Item 1</Card.ListItem>
      <Card.ListItem>Item 2</Card.ListItem>
    </Card.List>
  </Card>
)

export const ClickableList: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Header</Card.Title>
    </Card.Header>
    <Card.List>
      <Card.ListItem onClick={clickHandler}>
        <div>Item 1</div>
      </Card.ListItem>
      <Card.ListItem onClick={clickHandler}>
        <div>Item 2</div>
      </Card.ListItem>
    </Card.List>
  </Card>
)

export const InfoSummaryStory: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Allergies</Card.Title>
    </Card.Header>
    <InfoSummary clickHandler={clickHandler} />
    <Card.List>
      {allergies.map((allergy) => (
        <Card.ListItem key={allergy.id}>
          <AllergySummary allergy={allergy} />
        </Card.ListItem>
      ))}
    </Card.List>
    <InfoSummary clickHandler={clickHandler} />
    <Card.List>
      <Card.ListItem>Missing 10</Card.ListItem>
    </Card.List>
    <WarningSummary clickHandler={clickHandler} />
    <Card.List>
      <Card.ListItem>Missing 10</Card.ListItem>
      <Card.ListItem>Missing 10</Card.ListItem>
    </Card.List>
  </Card>
)
InfoSummaryStory.storyName = 'Info Summary'

export const WarningSummaryStory: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Allergies</Card.Title>
    </Card.Header>
    <WarningSummary clickHandler={clickHandler} />
    <Card.List>
      {allergies.map((allergy) => (
        <Card.ListItem key={allergy.id}>
          <AllergySummary allergy={allergy} />
        </Card.ListItem>
      ))}
    </Card.List>
  </Card>
)
WarningSummaryStory.storyName = 'Warning Summary'

export const ErrorSummaryStory: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Allergies</Card.Title>
    </Card.Header>
    <ErrorSummary clickHandler={clickHandler} />
    <Card.List>
      <Card.ListItem>No Data</Card.ListItem>
    </Card.List>
  </Card>
)
ErrorSummaryStory.storyName = 'Error Summary'

export const MissingDataSummaryStory: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Allergies</Card.Title>
    </Card.Header>
    <MissingDataSummary
      type="allergies"
      noData={['Item 1', 'Item 2']}
      missingData={['Item 1', 'Item 2']}
      partialData={['Item 1', 'Item 2']}
      completeData={['Item 1', 'Item 2']}
    />
  </Card>
)
MissingDataSummaryStory.storyName = 'Missing Data Summary'

export const NoData: Story = () => (
  <Card>
    <Card.Header>
      <Card.Title>Allergies</Card.Title>
    </Card.Header>
  </Card>
)

export const CardWithFullScreenControl: Story = () => {
  const widgetRef = useRef<HTMLDivElement>(null)

  const StyledHeader = styled(Card.Header)`
    justify-content: space-between;
  `

  return (
    <Card ref={widgetRef}>
      <StyledHeader>
        <Card.Title>Full Screen Widget</Card.Title>
        <Card.FullScreenControl elementRef={widgetRef} />
      </StyledHeader>
      <Card.List>
        <Card.ListItem>Item 1</Card.ListItem>
        <Card.ListItem>Item 2</Card.ListItem>
      </Card.List>
    </Card>
  )
}

export const CardWithMultipleButtonsAndFullScreenControl: Story = () => {
  const widgetRef = useRef<HTMLDivElement>(null)

  const StyledHeader = styled(Card.Header)`
    justify-content: space-between;
  `
  const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
  `

  return (
    <Card ref={widgetRef}>
      <StyledHeader>
        <Card.Title>Full Screen Widget</Card.Title>
        <ButtonGroup>
          <Button>Withdraw</Button>
          <Card.FullScreenControl elementRef={widgetRef} />
        </ButtonGroup>
      </StyledHeader>
      <Card.List>
        <Card.ListItem>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'start',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <Menu id="item-1" root={widgetRef}>
              <MenuItem>Item 1</MenuItem>
              <MenuItem>Item 2</MenuItem>
            </Menu>
            <span>Item 1</span>
          </div>
        </Card.ListItem>
        <Card.ListItem>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'start',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <Menu id="item-2" root={widgetRef}>
              <MenuItem>Item 1</MenuItem>
              <MenuItem>Item 2</MenuItem>
            </Menu>
            <span>Item 2</span>
          </div>
        </Card.ListItem>
      </Card.List>
    </Card>
  )
}

export default { title: 'UI/Organisms/Card' }
