import React, { createContext, FC, ReactNode, useContext, useReducer, useMemo } from 'react';

export interface StateModifiers {
  openSidebar: () => void,
  closeSidebar: () => void
}

export interface StateValues {
  isSidebarOpen: boolean
}

const stateModifiers = {
  openSidebar: () => { },
  closeSidebar: () => { }
}

const initialState = { isSidebarOpen: false }

type State = StateValues & StateModifiers

const UIContext = createContext<State>({ ...initialState, ...stateModifiers });

type Action = {
  type: 'OPEN_SIDEBAR' | 'CLOSE_SIDEBAR'
}

const uiReducer = (state: StateValues, { type }: Action) => {
  switch (type) {
    case 'OPEN_SIDEBAR': {
      return {
        ...state,
        isSidebarOpen: true
      }
    }
    case 'CLOSE_SIDEBAR': {
      return {
        ...state,
        isSidebarOpen: false
      }
    }
  }
}

interface Props {
  children: ReactNode
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);
  const openSidebar = () => dispatch({ type: 'OPEN_SIDEBAR' });
  const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' });
  const value = useMemo(() => {
    return {
      openSidebar,
      closeSidebar,
      isSidebarOpen: state.isSidebarOpen
    }
  }, [state.isSidebarOpen])
  return (
    <UIContext.Provider value={value}>
      {children}
    </UIContext.Provider >
  )
}

export const useUI = () => {
  return useContext(UIContext)
}