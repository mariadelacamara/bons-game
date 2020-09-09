import React from 'react';
import cn from 'classnames';
import { bool, func, number } from 'prop-types';
import ReactTooltip from 'react-tooltip';
import styles from '../styles.module.scss'
import { SELECT_CARD_TOOLTIP } from '../../../shared/strings';

function Turns({ onClick, turn, turnsLeft, disabled }) {
    return (
        <div className={styles.turnsContainer}>
            <h1 className={`bold-big ${styles.turnTitle}`}>Turns</h1>
            <div className={styles.turnData}>
                <div className={styles.turn}>
                    <span className="bold-normal uppercase">Current</span>
                    <span className="bold-normal uppercase extra-big">{turn}</span>
                </div>
                <div className={styles.turn}>
                    <span className="bold-normal uppercase">Past</span>
                    <span className="bold-normal uppercase extra-big">{turn > 1 ? turn - 1 : '-'}</span>
                </div>
                <div className={styles.turn}>

                    <span className="bold-normal uppercase">Left</span>
                    <span className="bold-normal uppercase extra-big">{turnsLeft}</span>
                </div>
            </div>
            <span data-tip data-for="buttonTooltip">
            <button  type="button" onClick={onClick} className={cn('button full-width', styles.turnButton, {
                [styles.disabled]: disabled
            })}>End Turn</button>
            </span>
            {disabled && <ReactTooltip id="buttonTooltip">{SELECT_CARD_TOOLTIP}</ReactTooltip>}
        </div>
    )
}

Turns.propTypes = {
    turn: number,
    turnsLeft: number,
    disabled: bool,
    onClick: func
};

export default Turns;