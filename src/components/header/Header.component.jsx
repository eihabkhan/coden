import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/CartIcon.component'
import CartDropdown from '../cart-dropdown/CartDropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { signOutStart } from '../../redux/user/user.actions'

import {ReactComponent as Logo} from '../../assets/logo.svg'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header.styles'


const Header = ({ currentUser, hidden, signOutStart }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/shop'>CONTACT</OptionLink>
                {
                    currentUser ?
                        <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
                    :
                        <OptionLink to='/login'>LOGIN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null: <CartDropdown/>
            }
        </HeaderContainer>
    )
}

const mapStateToProps = () => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)