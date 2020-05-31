import React from "react";
import {connect} from 'react-redux';

import MenuItems from '../menu-item/menu-item.component';
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";
import {DirectoryMenuContainer} from './directory.styles'

const Directory = ({sections}) =>(
            <DirectoryMenuContainer>
                { sections.map(({id, ...otherSectionProps}) => (
                            <MenuItems key={id} {...otherSectionProps}/>
                    ))}
            </DirectoryMenuContainer>
        );

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory)