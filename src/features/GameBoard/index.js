import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { bool, string, func } from 'prop-types';
import { getPlayer, getMonster, getCards, playTurn, getPlayerById, getGame, getMonsterById } from '../../services/gameService';
import { connect } from 'react-redux';
import { actionCreators as modalActions } from '../../model/actions/modalActions';
import { LOST_TURN } from '../../shared/strings';
import GameBoardLayout from './layout';

class GameBoard extends Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    gameId: this.props.gameId,
    loadingPlayer: false,
    loadingMonster: false,
    loadingGame: false,
    gameInfo: {},
    monsterEffect: {},
    playerData: {},
    monsterData: {},
    cards: [],
    turnLost: false,
    selectedCard: ''
  };

  componentDidMount() {
    const { gameId } = this.state;
    this.setState({ loadingGame: true, loadingPlayer: true, loadingMonster: true })
    getGame(gameId).then((response) => {
      this.setState({ gameInfo: response.data, loadingGame: false })
    }).catch(e => console.log("Error getGame", e))
    getPlayer(gameId).then((response) => {
      this.setState({ playerData: response.data })
      getCards(response.data.id).then((response) => {
        this.setState({ cards: response.data.slice(0, 3), loadingPlayer: false })
      }).catch(e => console.log('Error getCards', e))
    }).catch(e => console.log('Error getPlayer', e))
    getMonster(gameId).then((response) => {
      this.setState({ monsterData: response.data, loadingMonster: false })
    }).catch(e => console.log('Error getMonster', e))
  }

  handleSelectCard = id => {
    this.setState(prevState => ({
      selectedCard: prevState.selectedCard === id ? '' : id
    }))
  }

  handleTurn = () => {
    const { gameId, selectedCard, monsterData, playerData } = this.state;
    const { toggleModal } = this.props;

    this.setState({ loadingGame: true, loadingMonster: true, loadingPlayer: true })
    
    playTurn(gameId, selectedCard || '').then((response) => {
      const { game, monsterEffect } = response.data;

      toast.error(
        `Monster effect: ${monsterEffect.effect} : ${monsterEffect.value}
        ${monsterEffect.effect === 'HORROR' ? LOST_TURN : ''}
      `)

      if (game.turnsLeft === 0) return toggleModal();

      const promises = [getMonsterById(monsterData.id), getPlayerById(playerData.id)];
        
      if(selectedCard) {
        promises.push(getCards(playerData.id))
      }
  
      Promise.all(promises).then(([resMonster, resPlayer, resCards]) => {
        this.setState(prevState => ({ 
          monsterData: resMonster.data, 
          playerData: resPlayer.data, 
          loadingPlayer: false, 
          loadingMonster: false,
          cards: resCards ? resCards.data.slice(0,3) : prevState.cards,
          selectedCard: '',
          loadingGame: false,
          gameInfo: game,
          turnLost: monsterEffect.effect === 'HORROR'
        }), () => {
          const { monsterData, playerData } = this.state;
          if (monsterData.hp === 0 || playerData.hp === 0) {
            toggleModal();
          }
        })
      }).catch(e => console.log(e))
    })
  }

  render() {
    const { gameInfo, monsterData, playerData, cards, loadingGame, loadingPlayer, loadingMonster, selectedCard, turnLost } = this.state
    const { showModal } = this.props;
    return (
      <GameBoardLayout
        gameInfo={gameInfo}
        monsterData={monsterData}
        playerData={playerData}
        cards={cards}
        loadingGame={loadingGame}
        loadingPlayer={loadingPlayer}
        loadingMonster={loadingMonster}
        selectedCard={selectedCard}
        turnLost={turnLost}
        showModal={showModal}
        handleTurn={this.handleTurn}
        handleSelectCard={this.handleSelectCard}
      />
    )
  }
}

const mapStateToProps = state => ({
  showModal: state.modal.showModal,
  gameId: state.game.gameId
});

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(modalActions.toggleModal())
});

GameBoard.propTypes = {
  gameId: string,
  toggleModal: func,
  showModal: bool
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard)

