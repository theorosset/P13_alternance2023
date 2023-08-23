import { FC, FormEvent, useEffect, useRef, useState } from "react";
import {useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useNavigate } from 'react-router-dom';
import "./Login.scss"
import { loginUser } from "../../actions/user.action";
import { RootState } from "../../reducers";



const Login: FC = () => {
    const form = useRef<HTMLFormElement>(null)
    const user = useSelector((state: RootState) => state.userReducer);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (user.isConnected) {
             navigate('/connected-home-page');
        }
    }, [user.isConnected, navigate]);


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const { current } = form;

        if (current) {
            const usernameInput = current[0] as HTMLInputElement;
            const passwordInput = current[1] as HTMLInputElement;

            const postData = {
                email: usernameInput.value,
                password: passwordInput.value
            };

            // Dispatch loginUser action and wait for it to complete
            try {
                await dispatch(loginUser(postData) as any);
            } catch (error) {
                console.error(error)
            }
        }
    };

    return (
        <div className="container__login">
            <Header/>
            <main className="container__login__main">
            <section className="container__login__main__section">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
                <form ref={form} onSubmit={(e) => handleSubmit(e)}>
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