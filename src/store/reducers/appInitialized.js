
export const TYPE = 'APP_INITIALIZED'

export function appInitialized(state = true, action) {
  switch (action.type) {
    case TYPE:
      return { ...state, appInitialized: true }
    default:
      return state;
  }
}

