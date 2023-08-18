import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers'
import logo from '../../assets/argentBankLogo.png'
import './Header.scss'

const Header: FC = () => {
  const user = useSelector((state: RootState) => state.userReducer)

  return (
    <header className="container__header">
      <NavLink to="/">
        <img className="container__header--img" src={logo} alt="logo bank" />
      </NavLink>
      <div>
        {!user.isConnected ? (
            <NavLink to="/login" className="container__header--signIn">
                <i className="fa fa-user-circle"></i>
                Sign In
            </NavLink>
        ) : (
            <div className='container__header__connected'>
              <div className='container__header__connected__username'>
                <i className="fa fa-user-circle"></i>
                <p>{user.firstName}</p>
              </div>
                <NavLink to="/login" className="container__header__connected--out">
                  <i className="fa fa-sign-out"></i>
                    Sign out
                </NavLink>
            </div>
        )}
      </div>
    </header>
  )
}

export default Header
