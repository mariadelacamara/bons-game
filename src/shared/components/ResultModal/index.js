import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bool, string, func } from 'prop-types';
import Modal from 'react-modal';

import { actionCreators as modalActions } from '../../../model/actions/modalActions';
import { actionCreators as gameActions } from '../../../model/actions/gameActions';
import closeIcon from '../../images/close.png'
import styles from './styles.module.scss'

class GameModal extends Component {
  handleCloseModal = () => {
    const { toggleModal, deleteGameId } = this.props;
    toggleModal();
    deleteGameId();
    localStorage.removeItem('gameId')
  }

  render() {
    const { show, message } = this.props
    return <Modal
      isOpen={show}
      className={styles.content}
      onRequestClose={this.handleCloseModal}>
        <span className="bold-big">{message}</span>
        <button onClick={this.handleCloseModal}>
          <img alt="close" src={closeIcon} className={styles.icon} />
        </button>
      </Modal>
  }
}

const mapStateToProps = state => ({
  showModal: state.modal.showModal
});

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(modalActions.toggleModal()),
  deleteGameId: () => dispatch(gameActions.setGameId(null))
});

GameModal.propTypes = {
  toggleModal: func,
  deleteGameId: func,
  show: bool,
  message: string
}

export default connect(mapStateToProps, mapDispatchToProps)(GameModal);
