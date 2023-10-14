import { AiOutlineClose } from 'react-icons/ai';
import ProductAdded from '../ProductAdded/ProductAdded';

import { Swiper, SwiperSlide } from 'swiper/react';

import { useDispatch, useSelector } from 'react-redux';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
// import required modules
import { setDeleteAllProductsAdd } from '../../reducer/ListProductsAddRedux/ListProductsAddRedux';
import { setIsCloseBag } from '../../reducer/openMyBag/openMyBag';
import TotalPriceProduct from '../TotalPriceProduct/TotalPriceProduct';
import { animateScroll as scroll } from 'react-scroll';

import { Link } from 'react-router-dom';
function MyBag() {
    const listProductsAdded = useSelector((state) => state.listProductsRedux.listProducts);
    const isOpenBag = useSelector((state) => state.IsOpenBag.isOpenBag);
    const dispatch = useDispatch();

    const handleCloseBag = () => {
        dispatch(setIsCloseBag());
    };

    const deleteAllProductAdded = () => {
        dispatch(setDeleteAllProductsAdd());
    };

    const total = TotalPriceProduct();

    const handleToCheckout = () => {
        scroll.scrollToTop({
            duration: 0,
            smooth: true,
        });
    };

    return (
        <div
            className={`${
                isOpenBag ? '!translate-y-[0] xl:!translate-x-[0]' : ''
            } w-full xl:w-[26%] fixed xl:top-0 right-0 bottom-0 bg-white h-[80vh] xl:h-[100vh] translate-y-[105%] translate-x-0 xl:translate-x-[105%] xl:translate-y-0 duration-500 transition-all shadow-myBag z-[1000] xl:flex items-center justify-center flex-col`}
        >
            <div
                className="absolute top-[-20vh] left-0 right-0 h-[20vh] bg-transparent z-[-10]"
                onClick={handleCloseBag}
            ></div>
            <button
                className="absolute inline-block p-3 xl:right-[10%] right-[5%] top-[1%] xl:top-[5%]"
                onClick={handleCloseBag}
            >
                <AiOutlineClose className="text-[30px]" />
            </button>
            <button
                onClick={deleteAllProductAdded}
                className="absolute top-[3%] left-[8%] text-[18px] text-red-600 xl:hidden"
            >
                Delete All
            </button>
            <h2 className="font-medium text-[20px] md:text-[32px] mb-[32px] text-[2D2D2D] text-center mt-4 xl:mt-0">
                My Bag
            </h2>
            <div className="flex items-center justify-center">
                <div className="w-full xl:w-[unset]">
                    <Swiper
                        direction="vertical"
                        scrollbar={{
                            hide: true,
                        }}
                        modules={[Scrollbar, Mousewheel, FreeMode]}
                        slidesPerView="auto"
                        className="!h-[55vh] md:!h-[60vh] xl:!h-[45vh]"
                        freeMode={true}
                        mousewheel={true}
                    >
                        {listProductsAdded.map((product, index) => {
                            return (
                                <SwiperSlide key={index} className="!h-[unset]">
                                    <ProductAdded product={product} index={index} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
            <div className="w-[270px] mb-[20px] mt-4 hidden xl:block">
                <h4 className="text-[18px] font-medium text-colorWeb text-left w-full mb-2">
                    Total Products: {listProductsAdded.length}
                </h4>
                <h4 className="text-[18px] font-medium text-colorWeb text-left w-full ">Total Price: {total}$</h4>
            </div>

            <div className="hidden xl:flex w-[270px] items-center xl:justify-between">
                <Link
                    to="/checkout"
                    onClick={handleToCheckout}
                    className="block text-center bg-transparent hover:bg-colorWeb hover:text-white transition-all duration-500 w-[45%] rounded-[5px] p-2 text-colorWeb border-solid border-[1px] border-colorWeb"
                >
                    Check Out
                </Link>
                <button
                    onClick={deleteAllProductAdded}
                    className="bg-transparent hover:bg-colorWeb hover:text-white transition-all duration-500 w-[45%] rounded-[5px] p-2 text-colorWeb border-solid border-[1px] border-colorWeb"
                >
                    Delete All
                </button>
            </div>
        </div>
    );
}

export default MyBag;
