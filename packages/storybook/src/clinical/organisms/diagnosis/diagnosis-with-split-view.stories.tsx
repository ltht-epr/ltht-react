import { StoryFn } from '@storybook/react'

import DiagnosisSummary from '@ltht-react/diagnosis-summary'
import Card from '@ltht-react/card'
import styled from '@emotion/styled'
import { conditions, controls, tags } from './diagnosis.fixtures'

const StyledSplitViewContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  position: relative;
  height: 100%;
  gap: 2rem;
`

const StyledPreviewPane = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 0;

  & > * {
    flex-grow: 1;
  }
`

const StyledMainPane = styled.div`
  flex: 0 0 40%;
  height: 100%;
  max-height: 100%;
`

export const SummaryWithSplitView: StoryFn = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const clickHandler = (): void => {}

  return (
    <StyledSplitViewContainer>
      <StyledMainPane>
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
      </StyledMainPane>
      <StyledPreviewPane>
        <Card>
          <Card.Header>
            <Card.Title>Viewing: Diagnosis Level One</Card.Title>
          </Card.Header>
          <Card.List />
        </Card>
      </StyledPreviewPane>
    </StyledSplitViewContainer>
  )
}

export default { title: 'Clinical/Organisms/Diagnosis' }
