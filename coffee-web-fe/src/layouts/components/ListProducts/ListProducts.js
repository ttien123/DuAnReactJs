import { useQuery } from 'react-query';
import HeadingCpn from '../../../components/HeadingCpn/HeadingCpn';
import { getListProducts } from '../../../apis/list.api';
import OverlayProduct from '../../../components/OverlayProduct/OverlayProduct';

function ListProducts() {
    const { data, isFetching } = useQuery({
        queryKey: ['listProducts'],
        queryFn: () => getListProducts(),
    });

    return (
        <section>
            <div className="px-[20px]">
                <div className="container">
                    <HeadingCpn img title heading={'Our Coffee Menu'} description />
                </div>
                <div className="grid grid-cols-12 gap-[10px]">
                    {data?.data.map((product) => {
                        if (product.sizeImg === 'small') {
                            return (
                                <div
                                    key={product.id}
                                    className="col-span-12 w-full md:col-span-2 relative group overflow-hidden "
                                >
                                    <img
                                        src={product.url}
                                        alt="Product"
                                        className="w-full group-hover:scale-[120%] transition-all duration-500"
                                    />
                                    <OverlayProduct product={product} />
                                </div>
                            );
                        }
                        if (product.sizeImg === 'large') {
                            return (
                                <div
                                    key={product.id}
                                    className="col-span-12 w-full md:col-span-8 relative group overflow-hidden "
                                >
                                    <img
                                        src={product.url}
                                        alt="Product"
                                        className="w-full group-hover:scale-[120%] transition-all duration-500"
                                    />
                                    <OverlayProduct product={product} />
                                </div>
                            );
                        }
                        if (product.sizeImg === 'normal') {
                            return (
                                <div
                                    key={product.id}
                                    className="col-span-12 w-full md:col-span-3 relative group overflow-hidden "
                                >
                                    <img
                                        src={product.url}
                                        alt="Product"
                                        className="w-full group-hover:scale-[120%] transition-all duration-500"
                                    />
                                    <OverlayProduct product={product} />
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </section>
    );
}

export default ListProducts;
