import { useQuery } from 'react-query';
import { getSlides } from '../../../apis/list.api';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import '../../../css/component.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import ButtonCst from '../../../components/ButtonCst/ButtonCst';
import ButtonArrow from '../../../components/ButtonArrow';
function Slides() {
    // const { data,isFetching } = useQuery({
    //     queryKey: ['slide'],
    //     queryFn: () => getSlides(),
    // });

    const params = {
        effect: 'coverflow',
        // autoplay: {
        //     delay: 8000,
        //     disableOnInteraction: false,
        // },
        speed: 1500,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
    };
    return (
        <div className="relative">
            <Swiper modules={[EffectCoverflow, Pagination]} {...params}>
                <SwiperSlide>
                    <div className="relative">
                        <div className="absolute top-0 left-0 right-0 bottom-0 z-[150] bg-[#202020] opacity-40"></div>
                        <img
                            src="https://megaone.acrothemes.com/coffee/images/slider-1.jpg"
                            alt=""
                            className="object-cover h-[100vh] relative top-0 left-0 right-0 w-full"
                        />
                        <div className="container absolute z-[200] text-white top-[30%] lg:top-[45%] lg:translate-y-[-50%] left-0 right-0">
                            <div className="max-w-[90%] md:max-w-[50%] mx-auto md:ml-auto md:mr-0 ">
                                <h2 className="font-Montserrat text-center md:text-left  text-[18px] md:text-[36px] font-normal slider-content__heading  opacity-0">
                                    Best in Town
                                    <span className="block font-Montserrat  text-[30px] md:text-[60px] font-bold">
                                        Coffee House
                                    </span>
                                </h2>
                                <p className="text-center md:text-left mx-auto md:mx-0 text-T16 leading-[1.5] px-2 mb-[30px] mt-4 max-w-[90%] slider-content-recommend opacity-0">
                                    Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has
                                    been the industry’s standard dummy. Lorem Ipsum has been the industry’s standard
                                    dummy.
                                </p>
                                <div className="w-[200px] mx-auto md:mx-0 slider-content__btn opacity-0">
                                    <ButtonArrow className={'!ml-0 !text-[#202020] !font-Montserrat !bg-white'}>
                                        LEARN MORE
                                    </ButtonArrow>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#202020] opacity-40"></div>
                        <img
                            src="https://megaone.acrothemes.com/coffee/images/slider-2.jpg"
                            alt=""
                            className="object-cover h-[100vh] w-full"
                        />
                        <div className="container absolute z-[200] text-white top-[30%] lg:top-[45%] lg:translate-y-[-50%] left-0 right-0">
                            <div className="max-w-[90%] md:max-w-[55%] mx-auto">
                                <h2 className="font-Montserrat text-[18px] md:text-[36px] font-normal text-center slider-content__heading  opacity-0">
                                    Best in Town
                                    <span className="block font-Montserrat  text-[30px] md:text-[60px] font-bold">
                                        Coffee House
                                    </span>
                                </h2>
                                <p className="text-T16 leading-[1.5] px-2 mb-[30px] mt-4 text-center mx-auto slider-content-recommend opacity-0">
                                    Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has
                                    been the industry’s standard dummy. Lorem Ipsum has been the industry’s standard
                                    dummy.
                                </p>
                                <div className="w-[200px] mx-auto slider-content__btn opacity-0">
                                    <ButtonArrow className={'!ml-0 !text-[#202020] !font-Montserrat !bg-white'}>
                                        LEARN MORE
                                    </ButtonArrow>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#202020] opacity-40"></div>
                        <img
                            src="https://megaone.acrothemes.com/coffee/images/slider-3.jpg"
                            alt=""
                            className="object-cover h-[100vh] w-full"
                        />
                        <div className="container absolute z-[200] text-white top-[30%] lg:top-[45%] lg:translate-y-[-50%] left-0 right-0">
                            <div className="max-w-[90%] md:max-w-[50%] ml-8 lg:ml-0">
                                <h2 className="text-center md:text-left font-Montserrat text-[18px] md:text-[36px] font-normal slider-content__heading opacity-0">
                                    Best in Town
                                    <span className="block font-Montserrat text-[30px] md:text-[60px] font-bold">
                                        Coffee House
                                    </span>
                                </h2>
                                <p className="text-center mx-auto md:text-left md:mx-0 text-T16 leading-[1.5] px-2 mb-[30px] mt-4 max-w-[90%] slider-content-recommend opacity-0">
                                    Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has
                                    been the industry’s standard dummy. Lorem Ipsum has been the industry’s standard
                                    dummy.
                                </p>
                                <div className="w-[200px] mx-auto md:mx-0 slider-content__btn opacity-0">
                                    <ButtonArrow className={'!ml-0 !text-[#202020] !font-Montserrat !bg-white'}>
                                        LEARN MORE
                                    </ButtonArrow>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="swiper-pagination !hidden xl:!block"></div>
            </Swiper>
            <div className="absolute top-[50%] z-[200] right-[20px] translate-y-[-50%] hidden xl:block">
                <ButtonCst className={'mr-2'} small>
                    <span className="group-hover:text-colorWeb my-[5px] mx-[20px]">
                        <FaFacebookF />
                    </span>
                </ButtonCst>
                <ButtonCst className={'mr-2'} small>
                    <span className="group-hover:text-colorWeb my-[5px] mx-[20px]">
                        <FaTwitter />
                    </span>
                </ButtonCst>
                <ButtonCst className={'mr-2'} small>
                    <span className="group-hover:text-colorWeb my-[5px] mx-[20px]">
                        <FaLinkedinIn />
                    </span>
                </ButtonCst>
                <ButtonCst className={'mr-2'} small>
                    <span className="group-hover:text-colorWeb my-[5px] mx-[20px]">
                        <FaInstagram />
                    </span>
                </ButtonCst>
            </div>
        </div>
    );
}

export default Slides;
