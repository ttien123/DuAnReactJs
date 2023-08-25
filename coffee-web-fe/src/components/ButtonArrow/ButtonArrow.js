import ButtonCst from '../ButtonCst/ButtonCst';
import { AiOutlineArrowRight } from 'react-icons/ai';

function ButtonArrow({ children, className, isColMenu, isBlog }) {
    return (
        <div
            className={`group relative min-w-[130px] cursor-pointer flex items-center justify-center ${
                isColMenu ? 'mt-[30px]' : ''
            } ${isBlog ? '!justify-start' : ''}`}
        >
            <ButtonCst
                medium
                className={`${
                    isColMenu ? '' : ' ml-[48px]'
                } text-[14px] transition-all duration-500 group-hover:bg-white group-hover:text-colorTextWeb ${className}`}
            >
                {children}
            </ButtonCst>
            <div className="absolute transition-all duration-500 top-[50%] translate-y-[-50%] opacity-0 right-[-5px] group-hover:opacity-100 group-hover:right-[20px]">
                <AiOutlineArrowRight className="text-colorTextWeb text-[20px]" />
            </div>
        </div>
    );
}

export default ButtonArrow;
