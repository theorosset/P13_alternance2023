import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import './ConnectedHomePage.scss';
import { RootState } from '../../reducers';
import ButtonComponent from '../../components/buttonComponent/ButtonComponent';
import { getProfile } from '../../actions/user.action';
import { useNavigate } from 'react-router-dom';
import UsernameComponent from '../../components/usernameComponent/UsernameComponent';
import SoldAccount from '../../components/soldAccount/SoldAccount';
import EditProfile from '../../components/editProfile/EditProfile'
import Footer from '../../components/footer/Footer';

const ConnectedHomePage: FC = () => {
    const user = useSelector((state: RootState) => state.userReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [profileFetched, setProfileFetched] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    
    useEffect(() => {
        if (!user.isConnected) {
            navigate('/login');
        } else if (!profileFetched) {
            getUserProfile();
            setProfileFetched(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, navigate, profileFetched]);
    
    const getUserProfile = async () => {
        if (user.token) {
            await dispatch(getProfile(user.token) as any);
        }
    };
    
    const openModal = () => {
        setIsModalOpen(true);
    };
    const updateIsModalOpen = (value: boolean) => {
        setIsModalOpen(value);
    };

    return (
        <div className='container__connected__page'>
            <Header />
            <div className='container__connected__page__background'>
                <UsernameComponent/>
                <ButtonComponent  text={'Edit Name'} useClassName={'medium'} onClick={openModal}/>
                <div className='container__connected__page__background__sold'>
                    <SoldAccount topText='Argent Bank Checking (x8349)' sold='$2,082.79' bottomText='Available Balance'/>
                    <SoldAccount  topText='Argent Bank Checking (x8349)' sold='$2,082.79' bottomText='Available Balance'/>
                    <SoldAccount  topText='Argent Bank Checking (x8349)' sold='$2,082.79' bottomText='Available Balance'/>
                </div>
                 <EditProfile userInfo={user} setShow={isModalOpen} updateShow={updateIsModalOpen}/>
            </div>
            <Footer/>
        </div>
    );
};

export default ConnectedHomePage;
