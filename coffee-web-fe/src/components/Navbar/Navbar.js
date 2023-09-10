import ButtonArrow from '../ButtonArrow/ButtonArrow';
import ButtonCst from '../ButtonCst/ButtonCst';

import { FaAngleDown } from 'react-icons/fa';

import { Link } from 'react-scroll';
import { useDispatch } from 'react-redux';
import { setOpenSideMenu } from '../../reducer/reducerSideMenu/SideMenu.reducer';

function Navbar({ isColMenu }) {
    const dispatch = useDispatch();

    const handleCloseSideMenu = () => {
        dispatch(setOpenSideMenu(false));
    };

    return (
        <ul
            className={`flex item-center flex-1 ${
                isColMenu ? 'lg:justify-start justify-center lg:items-center' : 'justify-center'
            } relative`}
        >
            <div className={`flex  ${isColMenu ? 'flex-col' : ''}`}>
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-87}
                    duration={800}
                    className="navbar-item"
                >
                    <li
                        onClick={handleCloseSideMenu}
                        className={`min-w-[130px] cursor-pointer inline-block ${
                            isColMenu ? 'text-center w-full lg:text-left' : 'text-center'
                        }`}
                    >
                        <ButtonCst isColMenu={isColMenu}>Home</ButtonCst>
                    </li>
                </Link>

                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-87}
                    duration={800}
                    className="navbar-item"
                >
                    <li
                        onClick={handleCloseSideMenu}
                        className={`min-w-[130px] cursor-pointer inline-block ${
                            isColMenu ? 'text-center w-full lg:text-left' : 'text-center'
                        }`}
                    >
                        <ButtonCst isColMenu={isColMenu}>About Coffee</ButtonCst>
                    </li>
                </Link>

                <Link
                    activeClass="active"
                    to="ourMenu"
                    spy={true}
                    smooth={true}
                    offset={-87}
                    duration={800}
                    className="navbar-item"
                >
                    <li
                        onClick={handleCloseSideMenu}
                        className={`min-w-[130px] cursor-pointer inline-block ${
                            isColMenu ? 'text-center w-full lg:text-left' : 'text-center'
                        }`}
                    >
                        <ButtonCst isColMenu={isColMenu}>Our Menu</ButtonCst>
                    </li>
                </Link>

                <Link
                    activeClass="active"
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={-87}
                    duration={800}
                    className="navbar-item"
                >
                    <li
                        onClick={handleCloseSideMenu}
                        className={`min-w-[130px] cursor-pointer inline-block ${
                            isColMenu ? 'text-center w-full lg:text-left' : 'text-center'
                        }`}
                    >
                        <ButtonCst isColMenu={isColMenu}>News & Blog</ButtonCst>
                    </li>
                </Link>

                <Link
                    activeClass="active"
                    to="review"
                    spy={true}
                    smooth={true}
                    offset={-87}
                    duration={800}
                    className="navbar-item"
                >
                    <li
                        onClick={handleCloseSideMenu}
                        className={`min-w-[130px] cursor-pointer inline-block ${
                            isColMenu ? 'text-center w-full lg:text-left' : 'text-center'
                        }`}
                    >
                        <ButtonCst isColMenu={isColMenu}>Reviews</ButtonCst>
                    </li>
                </Link>

                <li className={`navbar-item-box-icon !top-[-16px] ${isColMenu ? 'hidden' : 'flex'}`}>
                    <FaAngleDown className="text-white text-[20px] mx-auto" />
                </li>
            </div>
        </ul>
    );
}

export default Navbar;
