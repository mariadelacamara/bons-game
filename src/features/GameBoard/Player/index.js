import React from 'react';
import { string, number } from 'prop-types';
import playerIcon from '../../../shared/images/player.png'
import styles from '../styles.module.scss'

function Player({ name, hp, maxHp, shield, image }) {
    return (
        <div className={styles.player}>
            <div className={styles.playerInfo}>
                <div className={styles.iconContainer}>
                    <img alt="player-icon" className={styles.icon} src={image || playerIcon} />
                </div>
                <div className={styles.info}>
                    <span className={`bold-big ${styles.playerName}`}>{name}</span>
                    <span className="big">{`HP: ${hp}/${maxHp}`}</span>
                </div>
            </div>
            <div className={styles.shield}>
                <span className="bold-big">{`Shield: ${shield}`}</span>
            </div>
        </div>);
}

Player.propTypes = {
  name: string,
  hp: number, 
  maxHp: number,
  shield: number,
  image: string
};

export default Player;
