import { AiOutlineClose } from 'react-icons/ai';
import ProductAdded from '../ProductAdded/ProductAdded';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
function MyBag({ isOpenBag, setIsOpenBag }) {
    const handleCloseBag = () => {
        setIsOpenBag(false);
    };

    return (
        <div
            className={`${
                isOpenBag ? '!translate-y-[0] xl:!translate-x-[0]' : ''
            } w-full xl:w-[26%] fixed xl:top-0 right-0 bottom-0 bg-white h-[80vh] xl:h-[100vh] translate-y-[105%] translate-x-0 xl:translate-x-[105%] xl:translate-y-0 duration-500 transition-all shadow-myBag z-[1000] xl:flex items-center justify-center flex-col`}
        >
        <div className='absolute top-[-20vh] left-0 right-0 h-[20vh] bg-transparent z-[-10]' onClick={handleCloseBag}></div>
            <button
                className="absolute inline-block p-3 xl:right-[10%] right-[5%] top-[3%] xl:top-[5%]"
                onClick={handleCloseBag}
            >
                <AiOutlineClose className="text-[30px]" />
            </button>
            <button className="absolute top-[5%] left-[8%] text-[18px] text-red-600 xl:hidden">Delete All</button>
            <h2 className="font-medium text-[20px] md:text-[32px] mb-[32px] text-[2D2D2D] text-center mt-4 xl:mt-0">My Bag</h2>
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
                        <SwiperSlide className="!h-[unset]">
                            <ProductAdded />
                        </SwiperSlide>
                        <SwiperSlide className="!h-[unset]">
                            <ProductAdded />
                        </SwiperSlide>
                        <SwiperSlide className="!h-[unset]">
                            <ProductAdded />
                        </SwiperSlide>
                        <SwiperSlide className="!h-[unset]">
                            <ProductAdded />
                        </SwiperSlide>
                        <SwiperSlide className="!h-[unset]">
                            <ProductAdded />
                        </SwiperSlide>
                        <SwiperSlide className="!h-[unset]">
                            <ProductAdded />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="w-[270px] mb-[20px] mt-4 hidden xl:block">
                <h4 className="text-[18px] font-medium text-colorWeb text-left w-full mb-2">Total Products: 4</h4>
                <h4 className="text-[18px] font-medium text-colorWeb text-left w-full ">Total Price: 100$</h4>
            </div>
            
            <div className="hidden xl:flex w-[270px] items-center xl:justify-between">
                <button className="bg-transparent hover:bg-colorWeb hover:text-white transition-all duration-500 w-[45%] rounded-[5px] p-2 text-colorWeb border-solid border-[1px] border-colorWeb">
                    Check Out
                </button>
                <button className="bg-transparent hover:bg-colorWeb hover:text-white transition-all duration-500 w-[45%] rounded-[5px] p-2 text-colorWeb border-solid border-[1px] border-colorWeb">
                    Delete All
                </button>
            </div>
        </div>
    );
}

export default MyBag;
