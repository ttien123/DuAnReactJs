import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import ItemPrSelling from '../../../components/ItemPrSelling';
import { useQuery } from 'react-query';
import { getListProducts } from '../../../apis/list.api';
import Footer from '../Footer/Footer';

function ListSellingPr() {
    const { data, isFetching } = useQuery({
        queryKey: ['listProducts'],
        queryFn: () => getListProducts(),
    });

    const params = {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
    };
    return (
        <div className="pt-[80px] w-full">
            <div className="container mb-[100px]">
                <div>
                    <h2 className="text-center text-[40px] font-medium mb-8 text-colorWeb">Best Selling Items</h2>
                </div>
                <div>
                    <Swiper modules={[Autoplay]} slidesPerView={4} {...params}>
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
