import React from 'react';
import PropTypes from 'prop-types';
import './Cards.css'

const Cards = (props) => {
    let style = {};
    if (props.showing) {
        style.backgroundColor = props.backgroundColor;
    }
    return (
        <div
        onClick={props.onClick} 
        className="card-container" 
        style={style} 
        />
        );
};

Cards.propTypes = {
    showing: PropTypes.bool.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Cards;