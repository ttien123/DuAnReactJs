import React, { useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { useSelector } from 'react-redux';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import ProductAdded from '../../components/ProductAdded/ProductAdded';
import TotalPriceProduct from '../../components/TotalPriceProduct/TotalPriceProduct';
import Footer from '../../layouts/components/Footer/Footer';

import { useForm } from 'react-hook-form';

const Checkout = () => {
    const listProductsAdded = useSelector((state) => state.listProductsRedux.listProducts);
    const total = TotalPriceProduct();

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmitForm = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div>
            <div className="container mt-8">
                <div className="grid gap-[30px] grid-cols-1 px-[15px] xl:grid-cols-2 mb-8">
                    <div className="col-span-1 border-[1px] border-colorWeb py-2 px-6 rounded-[1.8rem]">
                        <h2 className="text-[36px] font-medium text-center">Your Information</h2>
                        <form onSubmit={handleSubmit(onSubmitForm)}>
                            {errors.name?.type === 'required' && (
                                <span className="text-red-600 mt-4 block">Please enter this field</span>
                            )}
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className={`${
                                    errors.name ? '!border-red-600 !mt-1' : ''
                                } px-4 py-2 mt-6 rounded-sm block border-[1px] border-colorWeb w-full outline-none`}
                                {...register('name', {
                                    required: true,
                                })}
                            />
                            {errors.phoneNumber?.type === 'required' && (
                                <span className="text-red-600 mt-4 block">Please enter this field</span>
                            )}
                            {errors.phoneNumber?.type === 'minLength' && (
                                <span className="text-red-600 mt-4 block">Please enter a minimum of 9 digits</span>
                            )}
                            <input
                                type="text"
                                name="phoneNumber"
                                placeholder="Your Phone Number"
                                className={`${
                                    errors.phoneNumber ? '!border-red-600 !mt-1' : ''
                                } px-4 py-2 mt-6 rounded-sm block border-[1px] border-colorWeb w-full outline-none`}
                                {...register('phoneNumber', {
                                    required: true,
                                    minLength: 9,
                                })}
                            />
                            {errors.location?.type === 'required' && (
                                <span className="text-red-600 mt-4 block">Please enter this field</span>
                            )}
                            <input
                                type="text"
                                name="location"
                                placeholder="Your location"
                                className={`${
                                    errors.location ? '!border-red-600 !mt-1' : ''
                                } px-4 py-2 mt-6 rounded-sm block border-[1px] border-colorWeb w-full outline-none`}
                                {...register('location', {
                                    required: true,
                                })}
                            />
                            <textarea
                                cols={5}
                                name="description"
                                placeholder="Your Description"
                                {...register('description')}
                                className="h-[135px] resize-none px-4 py-2 mt-6 rounded-sm block border-[1px] border-colorWeb w-full outline-none"
                            ></textarea>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="w-full md:w-[50%] mt-6 mb-4 md:mt-8 py-2 text-white !bg-colorWeb rounded-3xl"
                                >
                                    Payment methods
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-span-1 border-[1px] border-colorWeb py-2 px-8 rounded-[1.8rem]">
                        <h2 className="text-[36px] font-medium text-center mb-4">List Products</h2>
                        <div className="flex items-center justify-center">
                            <div className="w-full p-2 border-[1px] border-colorWeb">
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
                                                <ProductAdded product={product} index={index} isCheckout />
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                        </div>
                        <div className=" mb-[20px] mt-4 xl:block">
                            <h4 className="text-[18px] font-medium text-colorWeb w-full mb-2 text-center">
                                Total Products: {listProductsAdded.length}
                            </h4>
                            <h4 className="text-[18px] font-medium text-colorWeb w-full text-center ">
                                Total Price: {total}$
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Checkout;
