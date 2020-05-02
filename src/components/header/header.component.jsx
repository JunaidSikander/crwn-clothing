import React from "react";
// import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux"
import { ReactComponent as Logo} from '../../assets/crown.svg'
import './header.styles.scss'

const Header = ({ currentUser }) => {
    return(
        <div className='header'>
            <Link className="logo-container" to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'> SHOP</Link>
                <Link className='option' to='/contact'> CONTACT</Link>
                {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                )}


            </div>
        </div>
    );
}

// Header.propTypes = {
//     currentUser: PropTypes.oneOfType([
//         PropTypes.object,
//         () => null
//     ]).isRequired
// };

const mapStateToProps = state =>({
    currentUser: state.user.currentUser
});
export default connect(mapStateToProps)(Header);