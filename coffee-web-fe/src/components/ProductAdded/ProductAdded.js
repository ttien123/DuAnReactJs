import { BiTrash } from 'react-icons/bi';

import { useDispatch, useSelector } from 'react-redux';
import {
    setChangeQtyProductAdd,
    setDeleteProductAdded,
    setDownQtyProduct,
    setUpQtyProduct,
} from '../../reducer/ListProductsAddRedux/ListProductsAddRedux';

function ProductAdded({ product, index }) {
    const dispatch = useDispatch();

    const deleteProductAdd = () => {
        dispatch(setDeleteProductAdded(index));
    };

    const handleChangeQty = (value, index) => {
        // if (value === NaN || value === null) {
        //     value = 1;
        // }
        dispatch(setChangeQtyProductAdd({ value, index }));
    };

    const handleUpQty = (index) => {
        dispatch(setUpQtyProduct(index));
    };

    const handleDownQty = (index) => {
        dispatch(setDownQtyProduct(index));
    };

    const handleBlurInput = (value, index) => {
        if (value === '') {
            dispatch(setDeleteProductAdded(index));
        }
    };

    return (
        <div className="flex xl:p-[10px] p-[16px] w-full xl:w-[270px] mb-[10px]">
            <div className="w-[100px] h-[100px]">
                <img src={product.url} alt="Product" className="w-full h-full" />
            </div>
            <div className="text-[#2D2D2D] p-[10px] flex-1">
                <h5 className="text-[#2D2D2D] text-[17px] font-medium">{product.name}</h5>
                <div className="text-[#2D2D2D] text-[14px] opacity-80 flex justify-center items-center">
                    Qty:
                    <button
                        onClick={(e) => handleDownQty(index)}
                        className="text-[20px] ml-2 mr-2 inline-block px-2 py-2"
                    >
                        -
                    </button>
                    <input
                        value={product.qty || ''}
                        type="text"
                        className="block w-[30px] h-[30px] text-center flex-1"
                        onChange={(e) => handleChangeQty(e.target.value, index)}
                        onBlur={(e) => handleBlurInput(e.target.value, index)}
                    />
                    <button onClick={(e) => handleUpQty(index)} className="text-[16px] ml-2 inline-block px-2 py-2">
                        +
                    </button>
                </div>
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
