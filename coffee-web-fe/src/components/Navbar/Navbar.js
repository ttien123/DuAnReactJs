import ButtonArrow from '../ButtonArrow/ButtonArrow';
import ButtonCst from '../ButtonCst/ButtonCst';

import { FaAngleDown } from 'react-icons/fa';

function Navbar({ isColMenu }) {
    return (
        <ul
            className={`flex item-center flex-1 ${
                isColMenu ? 'lg:justify-start justify-center lg:items-center' : 'justify-center'
            } relative`}
        >
            <div className={`flex  ${isColMenu ? 'flex-col' : ''}`}>
                <li
                    className={`navbar-item min-w-[130px] cursor-pointer inline-block ${
                        isColMenu ? 'text-center w-full lg:text-left' : 'text-center'
                    }`}
                >
                    <ButtonCst isColMenu={isColMenu}>Home</ButtonCst>
                </li>
                <li
                    className={`navbar-item min-w-[130px] cursor-pointer inline-block ${
                        isColMenu ? 'text-center w-full lg:text-left' : 'text-center'
                    }`}
                >
                    <ButtonCst isColMenu={isColMenu}>About Coffee</ButtonCst>
                </li>
                <li
                    className={`navbar-item min-w-[130px] cursor-pointer inline-block ${
                        isColMenu ? 'text-center w-full lg:text-left' : 'text-center'
                    }`}
                >
                    <ButtonCst isColMenu={isColMenu}>Our Menu</ButtonCst>
                </li>
                <li
                    className={`navbar-item min-w-[130px] cursor-pointer inline-block ${
                        isColMenu ? 'text-center w-full lg:text-left' : 'text-center'
                    }`}
                >
                    <ButtonCst isColMenu={isColMenu}>Reviews</ButtonCst>
                </li>
                <li
                    className={`navbar-item min-w-[130px] cursor-pointer inline-block ${
                        isColMenu ? 'text-center w-full lg:text-left' : 'text-center'
                    }`}
                >
                    <ButtonCst isColMenu={isColMenu}>News & Blog</ButtonCst>
                </li>

                <li className={`navbar-item-box-icon !top-[-16px] ${isColMenu ? 'hidden' : 'flex'}`}>
                    <FaAngleDown className="text-white text-[20px] mx-auto" />
                </li>
            </div>
        </ul>
    );
}

export default Navbar;
