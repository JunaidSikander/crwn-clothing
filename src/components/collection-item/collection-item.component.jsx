import React from "react";
import {connect} from 'react-redux'
import CustomButton from "../custom-button/custom-button.component";
import './collection-item.styles.scss'
import {addItem} from "../../redux/cart/cart.actions";

const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl } = item;
    return(
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
        <CustomButton onClick={() => addItem(item)} inverted> Add to Cart</CustomButton>
    </div>
)};

const mapDispatchToProps = {
    addItem
};

export default connect(null,mapDispatchToProps)(CollectionItem)