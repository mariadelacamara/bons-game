import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { string, func } from 'prop-types';
import CreateGame from '../features/CreateGame';
import GameBoard from '../features/GameBoard';
import PublicRoute from '../shared/components/PublicRoute';
import PrivateRoute from '../shared/components/PrivateRoute';
import { connect } from 'react-redux';
import { actionCreators as gameActions} from '../model/actions/gameActions';

class App extends Component {

  componentDidMount() {
    const { setGameId } = this.props
    const gameId = localStorage.getItem('gameId')
    gameId && setGameId(gameId)
  }
  
  render() {
  const { gameId } = this.props
  return (
    <Router>
      <Switch>
        <PublicRoute authenticated={gameId} component={CreateGame} path="/" exact />
        <PrivateRoute authenticated={gameId} component={GameBoard} path="/game" exact />
      </Switch>
    </Router>
  );
}
}

const mapStateToProps = state => ({
  gameId: state.game.gameId
})

const mapDispatchToProps = dispatch => ({
  setGameId: (gameId) => dispatch(gameActions.setGameId(gameId))
})


App.propTypes = {
  setGameId: func,
  gameId: string
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
