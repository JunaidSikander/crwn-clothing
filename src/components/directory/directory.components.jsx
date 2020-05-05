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
}

    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                            <MenuItems key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory