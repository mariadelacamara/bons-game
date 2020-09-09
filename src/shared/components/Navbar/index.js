import React from 'react'
import { connect } from 'react-redux';
import { actionCreators as gameActions } from '../../../model/actions/gameActions';
import styles from './styles.module.scss'

function Navbar({ resetGame }) {
  return (
    <div className={styles.navbarContainer}> 
      <button type="button" className={`button ${styles.exitButton}`} onClick={resetGame}>Exit Game</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  resetGame: () => dispatch(gameActions.resetGame())
})

export default connect(null, mapDispatchToProps)(Navbar);
