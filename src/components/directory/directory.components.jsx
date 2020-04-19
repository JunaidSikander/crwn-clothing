import React, { Component } from "react";
import MenuItems from '../menu-item/menu-item.component';

import {data} from '../../mock'

import './directory.styles.scss'
class Directory extends Component{
    constructor(){
        super();
        this.state = {
            sections: []
        }
    }
componentDidMount() {
        this.setState({
            sections: data
        });
    console.log(this.state.sections)
}

    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, size, id}) => (
                            <MenuItems key={id} title={title} imageUrl={ imageUrl } size = {size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory