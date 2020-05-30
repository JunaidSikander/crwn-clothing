import React, {Component} from "react";
import {Route} from 'react-router-dom';
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import {convertCollectionsSnapShotToMaps, firestore} from "../../firebase/firebase.utils";
import {connect} from 'react-redux'
import {updateCollections} from "../../redux/shop/shop.actions";

class ShopPage extends Component {
    unsubscribeFromSnapShot = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapShot = collectionRef.onSnapshot( snapShot => {
            const collectionMap = convertCollectionsSnapShotToMaps(snapShot);
            updateCollections(collectionMap);
        },(err)=> console.log(err))
    }

    componentWillUnmount() {
        if (this.unsubscribeFromSnapShot) {
            this.unsubscribeFromSnapShot();
        }

    }

    render() {
        const {match} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        )
    }
}

const mapDispatchToProps = {
    updateCollections
};

export default connect(
    null,
    mapDispatchToProps
)(ShopPage);
