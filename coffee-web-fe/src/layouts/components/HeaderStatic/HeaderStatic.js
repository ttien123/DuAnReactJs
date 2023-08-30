import { useState } from 'react';
import ButtonCst from '../../../components/ButtonCst/ButtonCst';
import Navbar from '../../../components/Navbar/Navbar';
import { AiOutlineUser, AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import HeadlessTippy from '@tippyjs/react/headless';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenSideMenu } from '../../../reducer/reducerSideMenu/SideMenu.reducer';
import { setOpenSignIn, setOpenSignUp } from '../../../reducer/Auth/Auth';
import IconMyBag from '../../../components/IconMyBag/IconMyBag';
function HeaderStatic({ isFixed, setIsOpenBag }) {
    const [isClickLogin, setIsClickLogin] = useState(false);
    // const isOpenSignIn = useSelector((state) => state.authState.isOpenSignIn);

    // xét tắt mở sideMenu
    const isOpenSideMenu = useSelector((state) => state.sideMenu.isOpenSideMeu);
    const dispatch = useDispatch();
    const handleOpenSideMenu = () => {
        dispatch(setOpenSideMenu(true));
    };

    // xét tắt mở auth
    const handleOpenAuth = () => {
        setIsClickLogin(true);
    };
    const handleHideAuth = () => {
        setIsClickLogin(false);
    };

    const handleOpenSignIn = () => {
        dispatch(setOpenSignIn());
    };
    const handleOpenSignUp = () => {
        dispatch(setOpenSignUp());
    };
    const handleOpenBag = () => {
        setIsOpenBag(true);
    };

    return (
        <header
            className={`${
                isFixed ? 'fixed animate-dropDownHeaderScroll bg-colorWeb' : 'absolute bg-transparent'
            } z-[500] top-0 left-0 right-0 bottom-0 h-[87px] p-[15px]`}
        >
            <button
                onClick={handleOpenSideMenu}
                className="w-[36px] p-[6px] absolute z-[100] top-[30px] left-[40px] group flex flex-col items-center"
            >
                <span className="block w-full h-[2px] bg-white mt-1 group-hover:w-[70%] transition-all duration-500"></span>
                <span className="block w-full h-[2px] bg-white mt-1"></span>
                <span className="block w-full h-[2px] bg-white mt-1 group-hover:w-[70%] transition-all duration-500"></span>
            </button>
            <div className="relative container h-full">
                <div className="flex items-center justify-center xl:justify-between h-full">
                    <img
                        src="https://megaone.acrothemes.com/coffee/images/logo.png"
                        alt="Logo"
                        className="cursor-pointer"
                    />
                    <div className="hidden xl:block flex-1">
                        <Navbar />
                    </div>
                </div>
            </div>

            <div>
                <HeadlessTippy
                    interactive
                    visible={isClickLogin}
                    placement="bottom"
                    onClickOutside={() => handleHideAuth()}
                    offset={[-50, 10]}
                    render={(attrs) => (
                        <div
                            className={`px-2 pt-1 pb-4 shadow-Auth min-w-[150px] bg-white rounded-[4px] font-Roboto text-T16`}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <div>
                                <div className="text-right">
                                    <button onClick={handleHideAuth} className="p-1 cursor-pointer mb-2 inline-block">
                                        <AiOutlineClose className="text-[20px]" />
                                    </button>
                                </div>
                                <button
                                    onClick={handleOpenSignIn}
                                    className="block px-4 py-2 text-center w-full transition-all duration-300 ease-in-out font-medium min-w-[150px] border-[2px] border-solid border-colorWeb text-colorWeb hover:bg-colorWeb hover:text-white"
                                >
                                    Sign In
                                </button>
                                <button
                                    onClick={handleOpenSignUp}
                                    className="block px-4 py-2 text-center w-full transition-all duration-300 ease-in-out font-medium min-w-[150px] border-[2px] border-solid  border-colorWeb mt-2 text-colorWeb hover:bg-colorWeb hover:text-white"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    )}
                >
                    <div className={'absolute top-[50%] translate-y-[-50%] right-[30px] md:right-[45px] '}>
                        <ButtonCst
                            className={
                                'border-white text-[20px] w-[45px] !h-[45px] rounded-[50%] flex items-center justify-center'
                            }
                            onClick={handleOpenAuth}
                        >
                            <AiOutlineUser />
                        </ButtonCst>
                    </div>
                </HeadlessTippy>
            </div>
            <IconMyBag handleOpenBag={handleOpenBag} />
        </header>
    );
}

export default HeaderStatic;
