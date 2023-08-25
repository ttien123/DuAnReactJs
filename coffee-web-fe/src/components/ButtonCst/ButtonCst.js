function ButtonCst({ children, className, small, medium, large, onClick, isColMenu }) {
    return (
        <button
            onClick={onClick}
            className={`text-white group relative h-full text-T16 font-bold bg-transparent border-solid border-[2px] border-transparent font-Roboto tracking-[0.5px] inline-block
            ${
                small
                    ? 'rounded-[50%] w-[40px] !h-[40px] flex items-center justify-center hover:bg-white transition-all duration-500'
                    : ''
            }
            ${medium ? 'px-[46px] py-[14px] rounded-[50px] leading-[1.8rem] border-white' : ''} 
            ${isColMenu ? '!py-[14px] text-[20px] lg:text-[30px] !text-left leading-normal' : ''}
            ${className}`}
        >
            {children}
            <span
                className={`${
                    isColMenu && !medium ? 'block' : 'hidden'
                } absolute bottom-0  w-0 h-[4px] bg-white transition-all duration-500 group-hover:w-full`}
            ></span>
        </button>
    );
}

export default ButtonCst;
