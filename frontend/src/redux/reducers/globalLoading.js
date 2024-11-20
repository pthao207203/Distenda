const initalState = {
  status: false,
}

const globalLoading = (state = initalState, action) => {
  switch (action.type) {
    case 'CONTROL-LOADING':
      state = {
        status: action.status
      }
      return state;
    default:
      return state;
  }
}

export default globalLoading;