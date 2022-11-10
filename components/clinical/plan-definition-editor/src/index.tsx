import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { PlanDefinition } from '@ltht-react/types'
import { BANNER_COLOURS, WIDESCREEN_MINIMUM_MEDIA_QUERY } from '@ltht-react/styles'
import { BullseyeIcon } from '@ltht-react/icon'
import { Toggle as ToggleInput } from '@ltht-react/input'
import { ChangeEvent, FC, useMemo } from 'react'

const toggleRowWidth = '3.5rem'

const toggleInputMixin = css`
  > div:first-of-type {
    text-align: right;
    width: ${toggleRowWidth};
    padding-right: 1rem;
  }
`

const StyledProblemToggleRow = styled.div`
  display: flex;
  font-weight: bold;
  align-items: center;
  ${toggleInputMixin}
  margin-bottom: 0.25rem;
`

const StyledEducationToggleRow = styled.div`
  display: flex;
  align-items: center;
  ${toggleInputMixin}
  margin-bottom: 0.25rem;

  > label svg {
    margin-right: 0.5rem;
  }
`

const StyledTargetRow = styled.div`
  display: flex;
  align-items: center;
  ${toggleInputMixin}

  svg {
    align: right;
    margin-right: 1rem;
  }

  > span:first-of-type {
    text-align: right;
    display: block;
    width: ${toggleRowWidth};
  }

  > div:first-of-type {
    flex: 1;
    text-align: left;
  }
`

const StyledListItem = styled.li`
  margin-bottom: 1rem;

  ${WIDESCREEN_MINIMUM_MEDIA_QUERY} {
  }
`

const StyledSectionToggle = styled.div`
  background-color: ${BANNER_COLOURS.INFO.BACKGROUND};
  font-weight: bold;
  color: black;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.25rem;
  ${toggleInputMixin}
`

const StyledBullseyeIcon = styled(BullseyeIcon)``

const StyledProblemSection = styled.ul`
  list-style: none;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1rem;
`

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
        <div>
          <ToggleInput
            checked={allProblemsOn}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleToggleAllProblemsClick(e)}
            id="problem-toggle-all"
          />
        </div>
        <label htmlFor="problem-toggle-all">Patient Problems</label>
      </StyledSectionToggle>
      <StyledProblemSection>
        {problemActions?.map((problem, pidx) => {
          const goal = planDefinition.goal?.find(
            (g) => problem?.goalId && g?.elementId?.includes(problem.goalId[0] as string)
          )
          return (
            <StyledListItem key={`problem-${pidx}`}>
              <StyledProblemToggleRow>
                <div>
                  <ToggleInput
                    checked={selectedProblemIds.includes(problem?.elementId as string)}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleSingleActionChange([{ problemId: problem?.elementId as string, state: e.target.checked }])
                    }
                    id={`problem-${pidx}`}
                  />
                </div>
                <label htmlFor={`problem-${pidx}`}>{problem?.description}</label>
              </StyledProblemToggleRow>
              <div>
                <StyledTargetRow>
                  <span>
                    <BullseyeIcon size="large" />
                  </span>
                  <div>{goal?.description?.text}</div>
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
          )
        })}
      </StyledProblemSection>
      <StyledSectionToggle>
        <div>
          <ToggleInput
            checked={allEducationOn}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleToggleAllEducationClick(e)}
            id="education-toggle-all"
          />
        </div>
        <label htmlFor="education-toggle-all">Patient Education</label>
      </StyledSectionToggle>
      <StyledProblemSection>
        <StyledListItem>
          <div>
            {educationActions?.map((g, eaidx) => (
              <StyledEducationToggleRow key={`education-${eaidx}`}>
                <div>
                  <ToggleInput
                    checked={selectedProblemIds.includes(g?.elementId as string)}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleSingleActionChange([{ problemId: g?.elementId as string, state: e.target.checked }])
                    }
                    id={`education-${eaidx}`}
                  />
                </div>
                <label htmlFor={`education-${eaidx}`}>
                  <StyledBullseyeIcon size="large" />
                  {g?.description}
                </label>
              </StyledEducationToggleRow>
            ))}
          </div>
        </StyledListItem>
      </StyledProblemSection>
    </>
  )
}

export interface ProblemState {
  problemId: string
  state: boolean
}

export type OnProblemChange = (e: ProblemState[]) => void

export interface ISelectedPlanDetailProps {
  planDefinition: PlanDefinition
  selectedProblemIds: string[]
  onProblemChange: OnProblemChange
}

export default SelectedPlanDetail
