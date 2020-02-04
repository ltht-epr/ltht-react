import React, { useContext, useReducer, createContext, useCallback } from 'react'

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

const defaultState: WidgetState = {
  collapseButton: {
    collapsed: false,
    showButton: false,
  },
  noData: false,
}

const reducer = (state: WidgetState, action: ActionTypes): WidgetState => {
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

interface WidgetState {
  collapseButton: CollapseButton
  noData: boolean
}

interface WidgetContextState {
  state: WidgetState
  dispatch: React.Dispatch<ActionTypes>
}

const WidgetContext = createContext<WidgetContextState>({
  state: defaultState,
  dispatch: (_action: ActionTypes): WidgetState => defaultState,
})

const WidgetProvider: React.FC<ProviderProps> = ({ children, collapsible, collapsed, noData = false }) => {
  const initialState: WidgetState = {
    collapseButton: {
      showButton: noData ? false : collapsible || false,
      collapsed: noData ? false : collapsed || false,
    },
    noData,
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return <WidgetContext.Provider value={{ state, dispatch }}>{children}</WidgetContext.Provider>
}

export interface ProviderProps {
  collapsible?: boolean
  collapsed?: boolean
  noData?: boolean
}

const useWidget = (): WidgetApi => {
  const { state, dispatch } = useContext(WidgetContext)

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

interface WidgetApi {
  collapseButton: CollapseButton
  setCollapseButton(button: CollapseButton): void
  noData: boolean
}

export { WidgetProvider, useWidget }
