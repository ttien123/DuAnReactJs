import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import ItemPrSelling from '../../../components/ItemPrSelling';
import { useQuery } from 'react-query';
import { getListProducts } from '../../../apis/list.api';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';

function ListSellingPr() {
    const [slidesPerView, setSlidesPerView] = useState(4);

    const { data, isFetching } = useQuery({
        queryKey: ['listProducts'],
        queryFn: () => getListProducts(),
    });

    useEffect(() => {
        const updateSlidesPerView = () => {
            if (window.innerWidth >= 1024) {
                setSlidesPerView(4); // 4 slides cho pc
            } else if (window.innerWidth >= 768) {
                setSlidesPerView(2); // 2 slides cho ipad
            } else {
                setSlidesPerView(1); // 1 slide cho điện thoại
            }
        };

        updateSlidesPerView();

        window.addEventListener('resize', updateSlidesPerView);

        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);
    const params = {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
    };
    return (
        <div className="pt-[80px] w-full px-[15px]">
            <div className="container mb-[100px]">
                <div>
                    <h2 className="text-center text-[40px] font-medium mb-8 text-colorWeb">Best Selling Items</h2>
                </div>
                <div>
                    <Swiper modules={[Autoplay]} slidesPerView={slidesPerView} {...params}>
                        {data?.data.map((product) => {
                            if (product.salePrice) {
                                return (
                                    <SwiperSlide key={product.id}>
                                        <ItemPrSelling product={product} />
                                    </SwiperSlide>
                                );
                            }
                        })}
                    </Swiper>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ListSellingPr;
