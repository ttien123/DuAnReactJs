import { FaChevronUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

function ArrowToTop({ isArrowTop }) {
    const isOpenBag = useSelector((state) => state.IsOpenBag.isOpenBag);
    return (
        <div>
            <button
                className={`z-[1000] w-[45px] h-[45px] flex items-center justify-center fixed bottom-16 right-8 bg-colorWeb rounded-[50%] ${
                    isArrowTop ? 'block' : 'hidden'
                } ${isOpenBag ? '!hidden' : 'block'}`}
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
