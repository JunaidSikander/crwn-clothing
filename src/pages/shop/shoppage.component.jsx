import React, {Component} from "react";
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import {shopData} from '../../mock';


class ShopPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            collection: []
        }
    }

    componentDidMount() {
        this.setState({
            collection: shopData
        })
    }


    render() {
        const {collection} = this.state;
        return (
            <div>
                {collection.map(({id, ...otherCollectionProps}) =>(
                    <div key={id}>
                        <CollectionPreview {...otherCollectionProps} />
                    </div>
                ))}
            </div>
        );
    }

}

export default ShopPage;