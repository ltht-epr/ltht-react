const SET_COLLAPSE_BUTTON = 'SET_COLLAPSE_BUTTON'

interface SetCollapseButtonAction {
  type: typeof SET_COLLAPSE_BUTTON
  button: CollapseButton
}

const setCollapseButtonAction = (button: CollapseButton): SetCollapseButtonAction => {
  return {
    type: SET_COLLAPSE_BUTTON,
    button,
  }
}

type ActionTypes = SetCollapseButtonAction

const defaultState: CardState = {
  collapseButton: {
    collapsed: false,
    showButton: false,
  },
  noData: false,
}

const reducer = (state: CardState, action: ActionTypes): CardState => {
  switch (action.type) {
    case SET_COLLAPSE_BUTTON:
      return { ...state, collapseButton: action.button }
    default:
      return state
  }
}

interface CollapseButton {
  collapsed: boolean
  showButton: boolean
}

interface CardState {
  collapseButton: CollapseButton
  noData: boolean
}

export { setCollapseButtonAction, defaultState, reducer, CollapseButton, CardState, ActionTypes }
