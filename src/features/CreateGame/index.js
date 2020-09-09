import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { actionCreators as gameActions } from '../../model/actions/gameActions';
import { FORM_STRINGS } from '../../shared/strings';

function CreateGame({ createGame }) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    createGame(data)
    e.target.reset();
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.title}>Welcome to Bons Game</h1>
      <span className={styles.text}>What's your name?</span>
      <input
        type='text'
        className='input'
        placeholder='Name'
        name='name'
        ref={register({
          required: { value: true, message: FORM_STRINGS.required },
          minLength: { value: 2, message: FORM_STRINGS.min },
          maxLength: { value: 30, message: FORM_STRINGS.max },
          validate: {
            noBlankSpaces: (value) => value.trim().length > 0,
          },
          pattern: {
            value: /^[a-zA-Z\s]*$/,
            message: FORM_STRINGS.pattern,
          },
        })}
      />
      {errors.name && (
        <span className={styles.errorText}>
          {errors.name.type === 'noBlankSpaces'
            ? FORM_STRINGS.no_blank
            : errors.name.message}
        </span>
      )}
      <input
        type='submit'
        className={`button full-width ${styles.buttonSubmit}`}
        value="Let's play"
      />
    </form>
  );
}

const mapDispatchToProps = dispatch => ({
  createGame: data => dispatch(gameActions.createGame(data))
});

CreateGame.propTypes = {
  createGame: func,
};

export default connect(null, mapDispatchToProps)(CreateGame);
