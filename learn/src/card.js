import React from 'react';

const Card = ({cards}) => {
  const cardlist = cards.map(card => {
    return(
      <div className = 'card' key = {card.id}>
        <div>Name : {card.name}</div>
        <div>Expiry Date: {card.expiry}</div>
        <div>Bank: {card.bank}</div>
      </div>
    )
  }
  )
      return (
        <div className = "card - list">
        {cardlist}
        </div>
      );
}
export default Card;