import React from 'react';
import playerIcon from '../../../shared/images/player.png'
import styles from '../styles.module.scss'

function Player({ name, hp, maxHp, shield, image }) {
    return (
        <div className={styles.player}>
            <div className={styles.playerInfo}>
                <div className={styles.iconContainer}>
                    <img alt="player-icon" className={styles.icon} src={image ? image : playerIcon} />
                </div>
                <div className={styles.info}>
                    <span className="bold-big">{name}</span>
                    <span className="big">{`HP: ${hp}/${maxHp}`}</span>
                </div>
            </div>
            <div className={styles.shield}>
                <span className="bold-big">{`Shield: ${shield}`}</span>
            </div>
        </div>);
}

export default Player;
