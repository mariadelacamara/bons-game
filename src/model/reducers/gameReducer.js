import { actions } from '../actionsTypes/gameActionsType';

const initialState = {
  gameId: null,
  loading: false,
  error: ''
}

const game = (state = initialState, action) => {
  switch (action.type) {
    case actions.CREATE_GAME:
      return {
        ...state,
        loading: true,
      };
    case actions.CREATE_GAME_SUCCESS:
      return {
        ...state,
        error: '',
        gameId: action.payload,
        loading: false
      };
    case actions.CREATE_GAME_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case actions.SET_GAME_ID: 
      return {
        ...state,
        gameId: action.payload
      };
    case actions.RESET_GAME: 
      return initialState
    default:
      return state;
  }
}

export default game;
