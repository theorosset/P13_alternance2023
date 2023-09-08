import { FC } from "react";
import Header from "../../components/header/Header";
import CircleLogoHome from "../../components/circleLogoHome/CircleLogoHome";
import Footer from "../../components/footer/Footer"
import chat from "../../assets/icon-chat.png"
import money from "../../assets/icon-money.png"
import security from "../../assets/icon-security.png"
import "./Home.scss"

const Home: FC = () => {
    return (
        <div className="container__home">
            <Header />
            <main>
                <div className="container__home__banniere">
                    <section className="container__home__banniere__section right-center">
                        <p className="container__home__banniere__section--subtitle">No fees.</p>
                        <p className="container__home__banniere__section--subtitle">No minimum deposit.</p>
                        <p className="container__home__banniere__section--subtitle">High interest rates.</p>
                        <p className="container__home__banniere__section--text">Open a savings account with Argent Bank today!</p>
                    </section>
                    <div className="container__home__banniere--image">
                    </div>
                    <section className="container__home__icon">
                        <CircleLogoHome icon={chat} title="You are our #1 priority" text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."/>
                        <CircleLogoHome icon={money} title="More savings means higher rates" text="The more you save with us, the higher your interest rate will be!"/>
                        <CircleLogoHome icon={security} title="Security you can trust" text="We use top of the line encryption to make sure your data and money is always safe."/>
                    </section>
                </div>
            </main>
            <Footer />
       </div>
    )
}

export default Home