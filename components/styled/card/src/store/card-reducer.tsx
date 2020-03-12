const SET_COLLAPSE_BUTTON = 'SET_COLLAPSE_BUTTON'
const SET_CHILDREN_COUNT = 'SET_CHILDREN_COUNT'

interface SetCollapseButtonAction {
  type: typeof SET_COLLAPSE_BUTTON
  button: CollapseButton
}

interface SetChildrenCountAction {
  type: typeof SET_CHILDREN_COUNT
  childrenCount: number
}

const setChildrenCountAction = (childrenCount: number): SetChildrenCountAction => {
  return {
    type: SET_CHILDREN_COUNT,
    childrenCount,
  }
}

const setCollapseButtonAction = (button: CollapseButton): SetCollapseButtonAction => {
  return {
    type: SET_COLLAPSE_BUTTON,
    button,
  }
}

type ActionTypes = SetCollapseButtonAction | SetChildrenCountAction

const defaultState: CardState = {
  collapseButton: {
    collapsed: false,
    showButton: false,
  },
  noData: false,
  childrenCount: 2,
}

const reducer = (state: CardState, action: ActionTypes): CardState => {
  switch (action.type) {
    case SET_COLLAPSE_BUTTON:
      return { ...state, collapseButton: action.button }
    case SET_CHILDREN_COUNT:
      return { ...state, childrenCount: action.childrenCount }
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
  childrenCount: number
}

export {
  setChildrenCountAction,
  setCollapseButtonAction,
  defaultState,
  reducer,
  CollapseButton,
  CardState,
  ActionTypes,
}
