import { createNewGame } from "../../services/gameService";
import { actions } from '../actionsTypes/gameActionsType';

export const actionCreators = {
  createGameSuccess: payload => ({
    type: actions.CREATE_GAME_SUCCESS,
    payload
  }),
  createGameError: payload => ({
    type: actions.CREATE_GAME_ERROR,
    payload
  }),
  createGame: name => dispatch => {
    dispatch({ type: actions.CREATE_GAME })
    createNewGame(name).then((response) => {
      if (response.ok) {
        localStorage.setItem('gameId', response.data.id);
        dispatch(actionCreators.createGameSuccess(response.data.id))
      } else {
        dispatch(actionCreators.createGameError(response.error))
        console.log(response.error);
      }
    })
  },
  setGameId: (gameId) => ({
    type: actions.SET_GAME_ID,
    payload: gameId
  }),
  resetGame: () => {
    localStorage.removeItem('gameId')
    return {
      type: actions.RESET_GAME
    }
  }
}
