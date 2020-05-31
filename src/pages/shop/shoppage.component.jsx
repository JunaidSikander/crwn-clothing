import React, {Component} from "react";
import {Route} from 'react-router-dom';
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import {convertCollectionsSnapShotToMaps, firestore} from "../../firebase/firebase.utils";
import {connect} from 'react-redux'
import {updateCollections} from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    state = {
        loading: true
    };

    unsubscribeFromSnapShot = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapShot = collectionRef.onSnapshot( snapShot => {
            const collectionMap = convertCollectionsSnapShotToMaps(snapShot);
            updateCollections(collectionMap);
            this.setState({loading: false})
        },(err)=> console.log(err))
    }

    componentWillUnmount() {
        if (this.unsubscribeFromSnapShot) {
            this.unsubscribeFromSnapShot();
        }

    }

    render() {
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className='shop-page'>
                <Route
                    exact path={`${match.path}`}
                    render={(props) => (
                        <CollectionOverviewWithSpinner isLoading={loading} {...props}/>
                        )}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => (
                        <CollectionPageWithSpinner isLoading={loading} {...props}/>
                    )}
                />
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
