import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { PlanDefinition } from '@ltht-react/types'
import { WIDESCREEN_MINIMUM_MEDIA_QUERY } from '@ltht-react/styles'
import { BullseyeIcon } from '@ltht-react/icon'
import { Toggle as ToggleInput } from '@ltht-react/input'
import { ChangeEvent, FC, useMemo } from 'react'

const styledToggleRowBase = css`
  margin: 0.5rem 0 0.75rem 0;

  > input[type='checkbox'] {
    margin-right: 1rem;
  }

  > label {
    font-weight: bold;
  }

  > svg {
    float: right;
  }
`

const StyledProblemToggleRow = styled.div`
  ${styledToggleRowBase};
  display: flex;
`

const StyledEducationToggleRow = styled.div`
  ${styledToggleRowBase}
  display: flex;
  align-items: center;

  > div:first-of-type {
    display: flex;
    align-items: center;
  }

  > label {
    font-weight: normal;
  }
`

const StyledTargetRow = styled.div`
  margin-bottom: 1rem;
  align-items: baseline;

  > svg {
    float: right;
  }

  > span:first-of-type {
    display: inline-block;
    width: 2rem;
    text-align: right;
  }

  > span:nth-of-type(2) {
    margin-left: 1rem;
  }

  > div {
    display: inline-block;
    margin-left: 1rem;
  }

  ul {
    margin-top: 0.5rem;
    margin-left: 1.5rem;
    list-style: disc;
  }
`

const StyledListItem = styled.div`
  ${WIDESCREEN_MINIMUM_MEDIA_QUERY} {
    display: flex;

    > div {
      flex: 1;
    }

    > div:last-of-type {
      margin-top: 0.5rem;
    }
  }
`

const StyledSectionToggle = styled.div`
  font-size: 1.25em;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > input[type='checkbox'] {
    margin-right: 1rem;
  }

  label {
    font-weight: bold;
  }
`

const StyledBullseyeIcon = styled(BullseyeIcon)`
  margin-right: 0.5rem;
`

const StyledProblemSection = styled.ul``

export const SelectedPlanDetail: FC<ISelectedPlanDetailProps> = ({
  planDefinition,
  selectedProblemIds,
  onProblemChange,
}) => {
  // Split actions from plan definition into clinical problem based and education based
  const { problemActions, educationActions } = useMemo(() => {
    const pa = planDefinition.action?.filter(
      (action) =>
        action?.code && action?.code[0] && action?.code[0].coding && action?.code[0].coding[0]?.code === 'problem'
    )
    const ea = planDefinition.action?.filter(
      (action) =>
        action?.code && action?.code[0] && action?.code[0].coding && action?.code[0].coding[0]?.code === 'education'
    )

    return {
      problemActions: pa,
      educationActions: ea,
    }
  }, [planDefinition.action])

  // Calculate whether all problems in the given categories are enabled
  const { allProblemsOn, allEducationOn } = useMemo(
    () => ({
      allProblemsOn:
        problemActions?.map((pa) => pa?.elementId as string).every((id) => selectedProblemIds.includes(id)) ?? false,
      allEducationOn:
        educationActions?.map((ea) => ea?.elementId as string).every((id) => selectedProblemIds.includes(id)) ?? false,
    }),
    [educationActions, problemActions, selectedProblemIds]
  )

  const handleSingleActionChange: OnProblemChange = (e) => {
    onProblemChange(e)
  }

  const handleToggleAllProblemsClick = (e: ChangeEvent<HTMLInputElement>) => {
    const newState = problemActions?.map((p) => ({ problemId: p?.elementId as string, state: e.target.checked }))

    newState && onProblemChange(newState)
  }

  const handleToggleAllEducationClick = (e: ChangeEvent<HTMLInputElement>) => {
    const newState = educationActions?.map((p) => ({ problemId: p?.elementId as string, state: e.target.checked }))

    newState && onProblemChange(newState)
  }

  return (
    <>
      <StyledSectionToggle>
        <ToggleInput
          checked={allProblemsOn}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleToggleAllProblemsClick(e)}
          id="problem-toggle-all"
        />
        <label htmlFor="problem-toggle-all">Patient Problems</label>
      </StyledSectionToggle>
      <StyledProblemSection>
        {problemActions?.map((problem, pidx) => {
          const goal = planDefinition.goal?.find(
            (g) => problem?.goalId && g?.elementId?.includes(problem.goalId[0] as string)
          )
          return (
            <li key={`problem-${pidx}`}>
              <StyledListItem>
                <StyledProblemToggleRow>
                  <ToggleInput
                    checked={selectedProblemIds.includes(problem?.elementId as string)}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleSingleActionChange([{ problemId: problem?.elementId as string, state: e.target.checked }])
                    }
                    id={`problem-${pidx}`}
                  />
                  <label htmlFor={`problem-${pidx}`}>{problem?.description}</label>
                </StyledProblemToggleRow>
                <div>
                  <StyledTargetRow>
                    <span>
                      <BullseyeIcon size="large" />
                    </span>
                    <span>{goal?.description?.text}</span>
                  </StyledTargetRow>

                  {problem?.action?.map((interventionPlan, ipidx) => (
                    <StyledTargetRow key={`intervention-plan-${ipidx}`}>
                      <span />
                      <div>
                        <p>{interventionPlan?.description}</p>
                        <ul>
                          {interventionPlan?.action?.map((intervention, idx) => (
                            <li key={`intervention-${idx}`}>{intervention?.description}</li>
                          ))}
                        </ul>
                      </div>
                    </StyledTargetRow>
                  ))}
                </div>
              </StyledListItem>
            </li>
          )
        })}
      </StyledProblemSection>
      <StyledSectionToggle>
        <ToggleInput
          checked={allEducationOn}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleToggleAllEducationClick(e)}
          id="education-toggle-all"
        />
        <label htmlFor="education-toggle-all">Patient Education</label>
      </StyledSectionToggle>
      <StyledProblemSection>
        <li>
          <StyledListItem>
            <div>
              {educationActions?.map((g, eaidx) => (
                <StyledEducationToggleRow key={`education-${eaidx}`}>
                  <ToggleInput
                    checked={selectedProblemIds.includes(g?.elementId as string)}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleSingleActionChange([{ problemId: g?.elementId as string, state: e.target.checked }])
                    }
                    id={`education-${eaidx}`}
                  />
                  <label htmlFor={`education-${eaidx}`}>
                    <StyledBullseyeIcon size="large" />
                    {g?.description}
                  </label>
                </StyledEducationToggleRow>
              ))}
            </div>
          </StyledListItem>
        </li>
      </StyledProblemSection>
    </>
  )
}

export type OnProblemChange = (e: { problemId: string; state: boolean }[]) => void

export interface ISelectedPlanDetailProps {
  planDefinition: PlanDefinition
  selectedProblemIds: string[]
  onProblemChange: OnProblemChange
}

export default SelectedPlanDetail
