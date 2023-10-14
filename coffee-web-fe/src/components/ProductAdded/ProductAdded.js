import { BiTrash } from 'react-icons/bi';
import { animateScroll as scroll } from 'react-scroll';

import { useDispatch, useSelector } from 'react-redux';
import { setDeleteProductAdded } from '../../reducer/ListProductsAddRedux/ListProductsAddRedux';
import { HandleQtyPr } from '../HandleQtyPr/HandleQtyPr';
import { Link } from 'react-router-dom';

function ProductAdded({ product, index, isCheckout }) {
    const dispatch = useDispatch();

    const deleteProductAdd = () => {
        dispatch(setDeleteProductAdded(index));
    };

    const handleToPrDetail = () => {
        scroll.scrollToTop({
            duration: 0,
            smooth: true,
        });
    };

    return (
        <div className="flex xl:p-[10px] p-[16px] w-full xl:w-[270px] mb-[10px]">
            <Link to={`/ProductDetail/${product.id}`} onClick={handleToPrDetail}>
                <div className="w-[100px] h-[100px]">
                    <img src={product.url} alt="Product" className="w-full h-full" />
                </div>
            </Link>
            <div className="text-[#2D2D2D] p-[10px] flex-1">
                <Link to={`/ProductDetail/${product.id}`}>
                    <h5 className="text-[#2D2D2D] text-[17px] font-medium">{product.name}</h5>
                </Link>
                {!isCheckout && <HandleQtyPr product={product} index={index} isCheckout={isCheckout} />}
                {isCheckout && <span className="block w-[30px] h-[30px] text-center flex-1">{product.qty}</span>}
                <div className="flex items-center justify-between">
                    <span className="text-[#2D2D2D] text-[14px] opacity-80">Price: {product.price * product.qty}$</span>
                    <button onClick={deleteProductAdd} className={`${isCheckout ? 'hidden' : 'block'}`}>
                        <BiTrash />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductAdded;
