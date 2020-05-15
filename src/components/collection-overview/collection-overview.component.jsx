import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCollections} from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({collection}) => (
    <div className='collections-overview'>
        {collection.map(({id, ...otherCollectionProps}) =>(
            <div key={id}>
                <CollectionPreview {...otherCollectionProps} />
            </div>
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collection: selectCollections
});

export default connect(mapStateToProps)(CollectionOverview)


