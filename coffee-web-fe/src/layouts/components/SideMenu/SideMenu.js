import ButtonCst from '../../../components/ButtonCst/ButtonCst';
import Navbar from '../../../components/Navbar/Navbar';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenSideMenu } from '../../../reducer/reducerSideMenu/SideMenu.reducer';

function SideMenu() {
    // useEffect(() => {
    //     const handleAnimationSideMenu = () => {

    //     };
    //     window.addEventListener('click', handleScroll);
    //     return () => {
    //         window.removeEventListener('click', handleScroll);
    //     };
    // }, []);
    // xét tắt mở sideMenu
    const isOpenSideMenu = useSelector((state) => state.sideMenu.isOpenSideMeu);
    const dispatch = useDispatch();
    const handleCloseSideMenu = () => {
        dispatch(setOpenSideMenu(false));
    };
    return (
        <div
            className={`${
                isOpenSideMenu ? 'translate-y-[0]' : 'translate-y-[100%]'
            } transition-all duration-500 fixed z-[1000] bg-[url(https://megaone.acrothemes.com/coffee/images/slider-1.jpg)] w-full h-full bg-cover bg-center overflow-hidden`}
        >
            <div className="bg-[#000000b3] absolute top-0 left-0 right-0 bottom-0 h-full"></div>
            <button
                onClick={handleCloseSideMenu}
                className="absolute top-[30px] left-[25px] xl:left-[35px] cursor-pointer p-2"
            >
                <AiOutlineClose className="text-[30px] text-white" />
            </button>
            <div className="px-[5rem] py-[3.5rem] flex items-center justify-center w-full h-full overflow-y-auto flex-wrap ">
                <div className="container relative">
                    <div className="text-center">
                        <img
                            src="https://megaone.acrothemes.com/coffee/images/logo.png"
                            alt="Logo"
                            className="mx-auto mb-[40px]"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row pb-[60px] justify-center items-center border-solid border-[#ffffff80] border-b-[1px]">
                        <div className="w-[66.666667%]">
                            <Navbar isColMenu />
                        </div>
                        <div className="flex justify-center items-start flex-col mt-6 lg:mt-0">
                            <span className="text-white block w-full text-center lg:text-left mb-[5px]">
                                +1 631 123 4567
                            </span>
                            <span className="text-white block w-full text-center lg:text-left mb-[5px]">
                                email@website.com
                            </span>
                            <div className="flex w-full justify-center items-center lg:justify-start my-2 lg:ml-[-12px]">
                                <ButtonCst className={'mr-2'} small>
                                    <span className="group-hover:text-colorWeb">
                                        <FaFacebookF />
                                    </span>
                                </ButtonCst>
                                <ButtonCst className={'mr-2'} small>
                                    <span className="group-hover:text-colorWeb">
                                        <FaTwitter />
                                    </span>
                                </ButtonCst>
                                <ButtonCst className={'mr-2'} small>
                                    <span className="group-hover:text-colorWeb">
                                        <FaYoutube />
                                    </span>
                                </ButtonCst>
                                <ButtonCst className={'mr-2'} small>
                                    <span className="group-hover:text-colorWeb">
                                        <FaInstagram />
                                    </span>
                                </ButtonCst>
                            </div>
                            <p className="text-white text-T16 max-w-[100%] text-center lg:text-left mx-auto">
                                © 2023 MegaOne. Made With Love by Themesindustry
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;
