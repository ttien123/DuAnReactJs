import { BiTrash } from 'react-icons/bi';

import { useDispatch, useSelector } from 'react-redux';
import { setDeleteProductAdded } from '../../reducer/ListProductsAddRedux/ListProductsAddRedux';
import { HandleQtyPr } from '../HandleQtyPr/HandleQtyPr';

function ProductAdded({ product, index }) {
    const dispatch = useDispatch();

    const deleteProductAdd = () => {
        dispatch(setDeleteProductAdded(index));
    };

    return (
        <div className="flex xl:p-[10px] p-[16px] w-full xl:w-[270px] mb-[10px]">
            <div className="w-[100px] h-[100px]">
                <img src={product.url} alt="Product" className="w-full h-full" />
            </div>
            <div className="text-[#2D2D2D] p-[10px] flex-1">
                <h5 className="text-[#2D2D2D] text-[17px] font-medium">{product.name}</h5>
                <HandleQtyPr product={product} index={index} />
                <div className="flex items-center justify-between">
                    <span className="text-[#2D2D2D] text-[14px] opacity-80">Price: {product.price}$</span>
                    <button onClick={deleteProductAdd}>
                        <BiTrash />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductAdded;
