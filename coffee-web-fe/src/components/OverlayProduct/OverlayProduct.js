import cup from '../../assets/img/imgItemAbout/cup.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { setIdPrDetail } from '../../reducer/idPrDetail/idPrDetail';
import { handleAddProduct } from '../HandleQtyPr/HandleQtyPr';

function OverlayProduct({ product, isSelling }) {
    const listProductsAdd = useSelector((state) => state.listProductsRedux.listProducts);
    const dispatch = useDispatch();

    const handleToPrDetail = (product) => {
        scroll.scrollToTop({
            duration: 0,
            smooth: true,
        });
        dispatch(setIdPrDetail(product));
    };

    return (
        <div className="absolute top-[5px] left-[5px] right-[5px] bottom-[5px] flex items-center justify-center opacity-0 translate-y-[10px] group-hover:translate-y-[0] group-hover:opacity-100 transition-all duration-500">
            <span className="absolute top-0 left-0 w-full h-full bg-colorWeb opacity-70"></span>
            <div className="relative w-full">
                <div>
                    <h5 className="text-[20px] font-Montserrat text-white text-center">{product.name}</h5>
                    <h4 className="text-[20px] md:text-[16px] lg:text-[20px] font-Montserrat text-white font-bold text-center">
                        {product.price}$
                    </h4>
                </div>
                <div className="flex mt-2 absolute top-2 left-0 bottom-0 w-full h-full items-center justify-between right-0">
                    <Link
                        to={`/ProductDetail/${product.id}`}
                        onClick={(e) => handleToPrDetail(product)}
                        className={`md:mr-2  w-[50px] md:w-[30px] md:h-[30px] xl:w-[50px] xl:h-[50px] m-auto h-[50px] cursor-pointer bg-[#e7bd91] rounded-full flex items-center justify-center ${
                            isSelling ? 'xl:!w-[40px] xl:!h-[40px]' : ''
                        }`}
                    >
                        <img src={cup} alt="Cup" className="w-[20px]" />
                    </Link>
                    <button
                        onClick={(e) => handleAddProduct(product, listProductsAdd, dispatch)}
                        className={`w-[50px] md:w-[30px] md:h-[30px] xl:w-[50px] xl:h-[50px] m-auto h-[50px] bg-[#e7bd91] rounded-full flex items-center justify-center ${
                            isSelling ? 'xl:!w-[40px] xl:!h-[40px]' : ''
                        }`}
                    >
                        <AiOutlineShoppingCart className="text-[18px] cursor-pointer text-colorWeb" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OverlayProduct;
