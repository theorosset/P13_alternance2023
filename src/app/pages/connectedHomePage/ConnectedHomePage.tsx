import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import './ConnectedHomePage.scss';
import { RootState } from '../../reducers';
import { getProfile } from '../../actions/user.action';
import { useNavigate } from 'react-router-dom';

const ConnectedHomePage = () => {
    const user = useSelector((state: RootState) => state.userReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [profileFetched, setProfileFetched] = useState(false);

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

    return (
        <div>
            <Header />
        </div>
    );
};

export default ConnectedHomePage;
