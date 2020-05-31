import React from "react";
import { withRouter } from 'react-router-dom'
import {MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentSubtitle, ContentTitle} from './menu-item.styles'

const MenuItems = ({ title, imageUrl, size, history ,linkUrl,match }) => (
    <MenuItemContainer
        size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImageContainer
            className='background-image'
            imageUrl={imageUrl}
        />
        <ContentContainer className='content'>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItems);