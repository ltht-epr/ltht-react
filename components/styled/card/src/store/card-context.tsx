import React, { useReducer, createContext } from 'react'
import { CardState, ActionTypes, defaultState, reducer } from './card-reducer'

interface CardContextState {
  state: CardState
  dispatch: React.Dispatch<ActionTypes>
}

const CardContext = createContext<CardContextState>({
  state: defaultState,
  dispatch: (_action: ActionTypes): CardState => defaultState,
})

const CardProvider: React.FC<ProviderProps> = ({ children, collapsible, collapsed, noData = false, childrenCount }) => {
  const initialState: CardState = {
    collapseButton: {
      showButton: noData ? false : collapsible || false,
      collapsed: noData ? false : collapsed || false,
    },
    noData,
    childrenCount,
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return <CardContext.Provider value={{ state, dispatch }}>{children}</CardContext.Provider>
}

export interface ProviderProps {
  collapsible?: boolean
  collapsed?: boolean
  noData?: boolean
  childrenCount: number
}

export { CardProvider, CardContext }
