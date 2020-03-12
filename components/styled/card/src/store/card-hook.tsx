import { useContext, useCallback } from 'react'
import { CollapseButton, setChildrenCountAction, setCollapseButtonAction } from './card-reducer'
import { CardContext } from './card-context'

const useCard = (): CardApi => {
  const { state, dispatch } = useContext(CardContext)

  const setCollapseButton = useCallback(
    (button: CollapseButton): void => {
      dispatch(setCollapseButtonAction(button))
    },
    [dispatch]
  )

  const setChildrenCount = useCallback(
    (childrenCount: number): void => {
      dispatch(setChildrenCountAction(childrenCount))
    },
    [dispatch]
  )

  return {
    collapseButton: state.collapseButton,
    childrenCount: state.childrenCount,
    setCollapseButton,
    setChildrenCount,
    noData: state.noData,
  }
}

interface CardApi {
  collapseButton: CollapseButton
  setCollapseButton(button: CollapseButton): void
  childrenCount: number
  setChildrenCount(childrenCount: number): void
  noData: boolean
}

export default useCard
