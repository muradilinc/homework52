import React from 'react';

const Card = ({rank, suit}) => {
    return (
        <div>
            <span className="card rank-k diams">
                <span className="rank">{rank}</span>
                <span className="suit">{suit}</span>
            </span>
        </div>
    );
};
export default Card;