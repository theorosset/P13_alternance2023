import { FC } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Login.scss"

const Login: FC = () => {
    return (
        <div className="container__login">
            <Header/>
            <main className="container__login__main">
            <section className="container__login__main__section">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
                <form>
                    <div className="container__login__main__section--input">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="container__login__main__section--input">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="container__login__main__section--remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="container__login__main__section--btn">Sign In</button>
                </form>
            </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Login