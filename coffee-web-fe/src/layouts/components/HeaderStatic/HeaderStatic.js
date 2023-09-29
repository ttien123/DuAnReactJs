import Navbar from '../../../components/Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { setOpenSideMenu } from '../../../reducer/reducerSideMenu/SideMenu.reducer';
import IconMyBag from '../../../components/IconMyBag/IconMyBag';
import { AiOutlineSearch } from 'react-icons/ai';
import { Element, Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { setIsOpenBag } from '../../../reducer/openMyBag/openMyBag';
import { useState } from 'react';
import InputSearch from '../InputSearch/InputSearch';

function HeaderStatic({ isFixed, isPrDetail }) {
    const [isSearch, setIsSearch] = useState(false);
    const [isPc, setIsPC] = useState(false);
    // xét tắt mở sideMenu
    const dispatch = useDispatch();
    const handleOpenSideMenu = () => {
        dispatch(setOpenSideMenu(true));
    };

    const handleOpenBag = () => {
        dispatch(setIsOpenBag());
    };

    return (
        <Element name="home">
            <div
                className={`fixed z-[1000] top-0 left-0 right-0 bottom-0 bg-[#000] opacity-40 ${
                    isSearch ? ' block' : 'hidden'
                }`}
                onClick={(e) => setIsSearch(false)}
            ></div>

            <div
                className={`h-[60px] bg-white z-[1000] fixed top-0 left-0 flex right-0 xl:hidden duration-500 transition-all ${
                    isSearch ? 'translate-y-[0]' : 'translate-y-[-100%]'
                }`}
            >
                <InputSearch isSearch />
                <button className="w-[20%] border-l-[1px] border-solid" onClick={(e) => setIsSearch(false)}>
                    Cancel
                </button>
            </div>

            <header
                className={`${
                    isFixed ? 'fixed animate-dropDownHeaderScroll bg-colorWeb' : 'absolute bg-transparent'
                } z-[500] top-0 left-0 right-0 bottom-0 p-[15px] ${
                    isPrDetail ? 'h-[60px] xl:h-[100px] !bg-colorWeb' : 'h-[87px]'
                }`}
            >
                <button
                    onClick={handleOpenSideMenu}
                    className={`w-[36px] p-[6px] absolute z-[100] top-[30px] left-[40px] group flex-col items-center ${
                        isPrDetail ? 'hidden' : 'flex'
                    }`}
                >
                    <span className="block w-full h-[2px] bg-white mt-1 group-hover:w-[70%] transition-all duration-500"></span>
                    <span className="block w-full h-[2px] bg-white mt-1"></span>
                    <span className="block w-full h-[2px] bg-white mt-1 group-hover:w-[70%] transition-all duration-500"></span>
                </button>
                <div className="relative container h-full">
                    <div
                        className={`flex items-center xl:justify-between h-full ${
                            isPrDetail ? 'justify-between' : 'justify-center'
                        }`}
                    >
                        {isPrDetail ? (
                            <RouterLink to={'/'} className="navbar-item">
                                <img
                                    src="https://megaone.acrothemes.com/coffee/images/logo.png"
                                    alt="Logo"
                                    className="cursor-pointer"
                                />
                            </RouterLink>
                        ) : (
                            <Link
                                activeClass="active"
                                to={'home'}
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
                        )}

                        <div className={`hidden flex-1 ${isPrDetail ? 'xl:hidden' : 'xl:block'}`}>
                            <Navbar />
                        </div>
                        <div className={`${isPrDetail ? 'mr-0 xl:mr-20 ' : 'hidden'}`}>
                            <InputSearch />
                            <button
                                onClick={(e) => setIsSearch(true)}
                                className="flex xl:hidden text-[20px] items-center justify-center bg-white border-l-[1px] border-colorWeb w-[50px] h-[35px]"
                            >
                                <AiOutlineSearch />
                            </button>
                        </div>
                    </div>
                </div>

                <IconMyBag handleOpenBag={handleOpenBag} />
            </header>
        </Element>
    );
}

export default HeaderStatic;
