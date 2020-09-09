import api from './api';

export const createNewGame = name => api.post('/games', name)

export const getGame = gameId => api.get(`/games/${gameId}`)

export const getPlayer = gameId => api.get(`/games/${gameId}/player`)

export const getPlayerById = playerId => api.get(`/players/${playerId}`)

export const getMonster = gameId => api.get(`/games/${gameId}/monster`)

export const getMonsterById = monsterId => api.get(`/monsters/${monsterId}`)

export const getCards = playerId => api.get(`/players/${playerId}/cards`)

export const playTurn = (gameId, cardId) => api.post(`/games/${gameId}/next-turn`, {card: cardId })
