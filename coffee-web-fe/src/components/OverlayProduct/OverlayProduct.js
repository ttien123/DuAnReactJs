import cup from '../../assets/img/imgItemAbout/cup.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setAddProducts } from '../../reducer/ListProductsAddRedux/ListProductsAddRedux';

function OverlayProduct({ product }) {
    const dispatch = useDispatch();
    const listProductsAdd = useSelector((state) => state.listProductsRedux.listProducts);

    const handleAddProduct = () => {
        let x = 0;
        listProductsAdd.map((productList, index) => {
            if (productList.id === product.id) {
                return (x = 1);
            }
        });
        if (x === 0) {
            const productAdd = product;
            if (!productAdd.qty) {
                productAdd.qty = 1;
            }
            dispatch(setAddProducts(productAdd));
        } else {
            x = 0;
        }
    };

    return (
        <div className="absolute top-[5px] left-[5px] right-[5px] bottom-[5px] flex items-center justify-center opacity-0 translate-y-[10px] group-hover:translate-y-[0] group-hover:opacity-100 transition-all duration-500">
            <span className="absolute top-0 left-0 w-full h-full bg-colorWeb opacity-70"></span>
            <div className="relative w-full">
                <div>
                    <h5 className="text-[20px] font-Montserrat text-white text-center">{product.name}</h5>
                    <h4 className="text-[20px] font-Montserrat text-white font-bold text-center">{product.price}$</h4>
                </div>
                <div className="flex mt-2 absolute top-2 left-0 bottom-0 w-full h-full items-center justify-between right-0">
                    <button className="md:mr-2  w-[50px] m-auto  h-[50px] cursor-pointer bg-[#e7bd91] rounded-full flex items-center justify-center">
                        <img src={cup} alt="Cup" className="w-[20px]" />
                    </button>
                    <button
                        onClick={handleAddProduct}
                        className="w-[50px] m-auto h-[50px] bg-[#e7bd91] rounded-full flex items-center justify-center"
                    >
                        <AiOutlineShoppingCart className="text-[18px] cursor-pointer text-colorWeb" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OverlayProduct;
