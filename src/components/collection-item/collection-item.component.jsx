import React from "react";

import './collection-item.styles.scss'

const CollectionItem = ({ name, price, imageUrl }) => (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <p className='name'> {name}</p>
            <p className='price'>{price}</p>
        </div>
    </div>
);
export default CollectionItem