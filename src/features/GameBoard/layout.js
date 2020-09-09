import React, { Fragment } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { bool, string, func, object, array } from 'prop-types';
import Navbar from '../../shared/components/Navbar';
import Player from './Player';
import Card from './Card';
import Turns from './Turns';
import GameModal from '../../shared/components/ResultModal';
import Spinner from '../../shared/components/Spinner';
import { calculateWinner } from '../../shared/utils';
import styles from './styles.module.scss';

function GameBoardLayout({
  gameInfo, 
  monsterData, 
  playerData, 
  cards, 
  loadingGame, 
  loadingPlayer, 
  loadingMonster, 
  selectedCard, 
  turnLost, 
  showModal,
  handleTurn,
  handleSelectCard
}) {
  return(<Fragment>
    <Navbar />
    <div className={styles.container}>
      {loadingGame || loadingMonster || loadingPlayer ? <Spinner /> :
        <Fragment>
          <div className={styles.boardContainer}>
            <Player name={monsterData.name} hp={monsterData.hp} maxHp={monsterData.maxHp} shield={monsterData.shield} image={monsterData.image} />
            <Player name={playerData.name} hp={playerData.hp} maxHp={playerData.maxHp} shield={playerData.shield} />
            <div className={styles.cardsContainer}>
              {cards.map(c =>
                <Card disabled={turnLost} selected={selectedCard === c.id} title={c.effect} value={c.value} id={c.id} key={c.id} onClick={handleSelectCard} />
              )
              }
            </div>
          </div>
          <Turns disabled={!turnLost && !selectedCard} onClick={handleTurn} turn={gameInfo.currentTurn} turnsLeft={gameInfo.turnsLeft} />
        </Fragment>
      }
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
      <GameModal show={showModal} message={calculateWinner(monsterData.hp)} />

    </div>
  </Fragment>)
}

GameBoardLayout.propTypes = {
  gameInfo: object,
  monsterData: object,
  playerData: object,
  cards: array,
  loadingGame: bool,
  loadingMonster: bool,
  loadingPlayer: bool,
  selectedCard: string,
  turnLost: bool,
  showModal: bool,
  handleSelectCard: func,
  handleTurn: func
};

export default GameBoardLayout;
