import { FC } from "react";
import logo from "../../assets/argentBankLogo.png"
import { NavLink } from "react-router-dom";
import './Header.scss'


const Header: FC = () => {
    const isConnected = false
    return (
        <header className="container__header">
            <NavLink to="/">
                <img className="container__header--img" src={logo} alt="logo bank" />
            </NavLink>
            <div>
                <NavLink to="/signIn" className="container__header--signIn">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            </div>
        </header>
    )
}

export default Header