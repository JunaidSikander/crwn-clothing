import React from "react";
import {connect} from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import {createStructuredSelector} from "reselect";
import {selectShopCollection} from "../../redux/shop/shop.selectors";

const ShopPage = ({collection}) =>(
            <div>
                {collection.map(({id, ...otherCollectionProps}) =>(
                    <div key={id}>
                        <CollectionPreview {...otherCollectionProps} />
                    </div>
                ))}
            </div>
        );

const mapStateToProps = createStructuredSelector({
    collection: selectShopCollection
});

export default connect(mapStateToProps)(ShopPage);