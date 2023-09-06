import { useEffect } from 'react';
import LoadingStart from '../../components/loading/loadingStart/LoadingStart';
import HeaderStatic from '../components/HeaderStatic';
import SideMenu from '../components/SideMenu/SideMenu';
import { useState } from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import MyBag from '../../components/Mybag/Mybag';
import MoBiMyBag from '../../components/MobiMyBag/MobiMyBag';
import { useDispatch } from 'react-redux';
import { setListProductsAdded } from '../../reducer/ListProductsAddRedux/ListProductsAddRedux';


function MainLayout({ children }) {
    const dispatch = useDispatch()

    const [isFixed, setIsFixed] = useState(false);
    const [isOpenBag, setIsOpenBag] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if ((window.scrollY || document.documentElement.scrollTop) >= 182) {
                setIsFixed(true);
            }
            if ((window.scrollY || document.documentElement.scrollTop) < 182) {
                setIsFixed(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('List_Products_Added'))) {
            dispatch(setListProductsAdded(JSON.parse(localStorage.getItem('List_Products_Added'))))
        }
    },[])

    return (
        <div className="overflow-hidden">
            {/* <LoadingStart /> */}
            <HeaderStatic isFixed={isFixed} isOpenBag={isOpenBag} setIsOpenBag={setIsOpenBag} />
            <MyBag isOpenBag={isOpenBag} setIsOpenBag={setIsOpenBag} />
            <SideMenu />
            <SignIn />
            <SignUp />
            <MoBiMyBag setIsOpenBag={setIsOpenBag} />
            <main>{children}</main>
        </div>
    );
}

export default MainLayout;
