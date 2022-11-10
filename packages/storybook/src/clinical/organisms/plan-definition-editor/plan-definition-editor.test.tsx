import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SelectedPlanDetail, { ISelectedPlanDetailProps } from '@ltht-react/plan-definition-editor'
import { planDefinition } from './plan-definition-editor.fixtures'

describe('selected plan detail', () => {
  const defaultProps: ISelectedPlanDetailProps = {
    onProblemChange: jest.fn(),
    planDefinition,
    selectedProblemIds: [],
  }

  afterEach(() => {
    ;(defaultProps.onProblemChange as jest.MockedFunction<any>).mockClear()
  })

  it('should show problems', async () => {
    render(<SelectedPlanDetail {...defaultProps} />)

    await screen.findByText('Infection (Pneumonia)')
  })

  it('should show correct state for enabled problems', async () => {
    render(<SelectedPlanDetail {...defaultProps} selectedProblemIds={['Action/PP Pneumonia Infection UB']} />)

    const toggle = (await screen.findByLabelText('Infection (Pneumonia)')) as HTMLInputElement
    expect(toggle.checked).toBe(true)
  })

  it('should call back when a problem is toggled', async () => {
    render(<SelectedPlanDetail {...defaultProps} />)

    userEvent.click(await screen.findByText('Infection (Pneumonia)'))

    expect(defaultProps.onProblemChange).toHaveBeenCalledTimes(1)
    expect(defaultProps.onProblemChange).toHaveBeenLastCalledWith(
      expect.arrayContaining([expect.objectContaining({ problemId: 'Action/PP Pneumonia Infection UB', state: true })])
    )
  })

  it('should call back when all problems are toggled off', async () => {
    render(
      <SelectedPlanDetail
        {...defaultProps}
        selectedProblemIds={[
          'Action/PP Pneumonia Fluid UB',
          'Action/PP Pneumonia Infection UB',
          'Action/PP Pneumonia Resp Comp UB',
        ]}
      />
    )

    userEvent.click(await screen.findByText('Patient Problems'))

    expect(defaultProps.onProblemChange).toHaveBeenCalledTimes(1)
    expect(defaultProps.onProblemChange).toHaveBeenLastCalledWith(
      expect.arrayContaining([
        { problemId: 'Action/PP Pneumonia Fluid UB', state: false },
        { problemId: 'Action/PP Pneumonia Infection UB', state: false },
        { problemId: 'Action/PP Pneumonia Resp Comp UB', state: false },
      ])
    )
  })

  it('should call back when all education points are toggled off', async () => {
    render(
      <SelectedPlanDetail
        {...defaultProps}
        selectedProblemIds={[
          'Action/EDG pneumonia1 overview',
          'Action/EDG pneumonia5 manage',
          'Action/EDG pneumonia6 pmd',
          'Action/EDG pneumonia text',
        ]}
      />
    )

    userEvent.click(await screen.findByText('Patient Education'))

    expect(defaultProps.onProblemChange).toHaveBeenCalledTimes(1)
    expect(defaultProps.onProblemChange).toHaveBeenLastCalledWith(
      expect.arrayContaining([
        { problemId: 'Action/EDG pneumonia1 overview', state: false },
        { problemId: 'Action/EDG pneumonia5 manage', state: false },
        { problemId: 'Action/EDG pneumonia6 pmd', state: false },
        { problemId: 'Action/EDG pneumonia text', state: false },
      ])
    )
  })

  it('should call back when all problems are toggled on', async () => {
    render(<SelectedPlanDetail {...defaultProps} />)

    userEvent.click(await screen.findByText('Patient Problems'))

    expect(defaultProps.onProblemChange).toHaveBeenCalledTimes(1)
    expect(defaultProps.onProblemChange).toHaveBeenLastCalledWith(
      expect.arrayContaining([
        { problemId: 'Action/PP Pneumonia Fluid UB', state: true },
        { problemId: 'Action/PP Pneumonia Infection UB', state: true },
        { problemId: 'Action/PP Pneumonia Resp Comp UB', state: true },
      ])
    )
  })

  it('should call back when all education points are toggled on', async () => {
    render(<SelectedPlanDetail {...defaultProps} />)

    userEvent.click(await screen.findByText('Patient Education'))

    expect(defaultProps.onProblemChange).toHaveBeenCalledTimes(1)
    expect(defaultProps.onProblemChange).toHaveBeenLastCalledWith(
      expect.arrayContaining([
        { problemId: 'Action/EDG pneumonia1 overview', state: true },
        { problemId: 'Action/EDG pneumonia5 manage', state: true },
        { problemId: 'Action/EDG pneumonia6 pmd', state: true },
        { problemId: 'Action/EDG pneumonia text', state: true },
      ])
    )
  })
})
