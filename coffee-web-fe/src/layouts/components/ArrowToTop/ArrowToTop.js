import { FaChevronUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

function ArrowToTop({ isArrowTop }) {
    return (
        <div>
            <button
                className={`w-[45px] h-[45px] flex items-center z-[100] justify-center fixed bottom-8 right-8 bg-colorWeb rounded-[50%] ${
                    isArrowTop ? 'block' : 'hidden'
                }`}
                onClick={() =>
                    scroll.scrollToTop({
                        duration: 500,
                        smooth: true,
                    })
                }
            >
                <FaChevronUp className="text-[23px] text-white" />
            </button>
        </div>
    );
}

export default ArrowToTop;
