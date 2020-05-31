import React from "react";
import {connect} from 'react-redux'
import {addItem} from "../../redux/cart/cart.actions";
import {
    AddButton,
    BackgroundImage,
    CollectionFooterContainer,
    CollectionItemContainer,
    NameContainer,
    PriceContainer
} from './collection-item.styles'

const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl } = item;
    return(
    <CollectionItemContainer>
        <BackgroundImage imageUrl={imageUrl}/>
        <CollectionFooterContainer>
            <NameContainer> {name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)} inverted> Add to Cart</AddButton>
    </CollectionItemContainer>
)};

const mapDispatchToProps = {
    addItem
};

export default connect(null,mapDispatchToProps)(CollectionItem)