import { useContext, useCallback } from 'react'
import { CollapseButton, setCollapseButtonAction } from './card-reducer'
import { CardContext } from './card-context'

const useCard = (): CardApi => {
  const { state, dispatch } = useContext(CardContext)

  const setCollapseButton = useCallback(
    (button: CollapseButton): void => {
      dispatch(setCollapseButtonAction(button))
    },
    [dispatch]
  )

  return {
    collapseButton: state.collapseButton,
    setCollapseButton,
    noData: state.noData,
  }
}

interface CardApi {
  collapseButton: CollapseButton
  setCollapseButton(button: CollapseButton): void
  noData: boolean
}

export default useCard
