import { useState } from 'react';
import ButtonCst from '../../../components/ButtonCst/ButtonCst';
import Navbar from '../../../components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenSideMenu } from '../../../reducer/reducerSideMenu/SideMenu.reducer';
import IconMyBag from '../../../components/IconMyBag/IconMyBag';

import { Element, Link } from 'react-scroll';
import { setIsOpenBag } from '../../../reducer/openMyBag/openMyBag';

function HeaderStatic({ isFixed }) {
    // xét tắt mở sideMenu
    console.log(setIsOpenBag);
    const dispatch = useDispatch();
    const handleOpenSideMenu = () => {
        dispatch(setOpenSideMenu(true));
    };

    const handleOpenBag = () => {
        dispatch(setIsOpenBag());
    };

    return (
        <Element name="home">
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
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={800}
                            className="navbar-item"
                        >
                            <img
                                src="https://megaone.acrothemes.com/coffee/images/logo.png"
                                alt="Logo"
                                className="cursor-pointer"
                            />
                        </Link>
                        <div className="hidden xl:block flex-1">
                            <Navbar />
                        </div>
                    </div>
                </div>

                <IconMyBag handleOpenBag={handleOpenBag} />
            </header>
        </Element>
    );
}

export default HeaderStatic;
