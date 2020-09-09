const initialState = {
  showModal: false
}

const modal = (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_MODAL':
      return {
        showModal: !state.showModal
      };
    default:
      return state;
  }
}

export default modal;
