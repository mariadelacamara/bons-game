import React, { Component } from 'react'
import { string, bool, func, number } from 'prop-types';
import shield from '../../../shared/images/shield.png'
import damage from '../../../shared/images/damage.png'
import heal from '../../../shared/images/heal.png'
import styles from '../styles.module.scss'
import cn from 'classnames'

class Card extends Component {
    handleClick = () => { 
        const { onClick, id } = this.props;
        onClick(id);
    }
    
    render(){
        const { title, value, selected, disabled } = this.props;
    return (
        <button disabled={disabled} type="button" className={cn(styles.card, {
            [styles.selectedCard]: selected,
            [styles.disabled]: disabled
        })} onClick={this.handleClick}>
            <img alt="card-icon" className={styles.icon} src={title === 'DAMAGE' ? damage : (title === 'HEAL' ? heal : shield)} />
            <span className="bold-big">{title}</span>
            <span className="big">{value}</span>
        </button>
    );
    }
}

Card.propTypes = {
    title: string,
    value: number,
    selected: bool,
    disabled: bool,
    id: string,
    onClick: func
};

export default Card;
