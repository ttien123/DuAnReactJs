import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setAddProducts,
    setChangeQtyProductAdd,
    setDeleteProductAdded,
    setDownQtyProduct,
    setUpQtyProduct,
} from '../../reducer/ListProductsAddRedux/ListProductsAddRedux';
import { setIsOpenBag } from '../../reducer/openMyBag/openMyBag';

export const HandleQtyPr = ({ product }) => {
    const dispatch = useDispatch();

    const handleChangeQty = (value, product) => {
        // if (value === NaN || value === null) {
        //     value = 1;
        // }
        const id = product.id;
        dispatch(setChangeQtyProductAdd({ value, id }));
    };

    const handleUpQty = (product) => {
        dispatch(setUpQtyProduct(product.id));
    };

    const handleDownQty = (product) => {
        dispatch(setDownQtyProduct(product.id));
    };

    const handleBlurInput = (value, product) => {
        if (value === '') {
            dispatch(setDeleteProductAdded(product.id));
        }
    };
    return (
        <div className="text-[#2D2D2D] text-[14px] opacity-80 flex justify-center items-center">
            Qty:
            <button onClick={(e) => handleDownQty(product)} className="text-[20px] ml-2 mr-2 inline-block px-2 py-2">
                -
            </button>
            <input
                value={product.qty || ''}
                type="text"
                className="block w-[30px] h-[30px] text-center flex-1"
                onChange={(e) => handleChangeQty(e.target.value, product)}
                onBlur={(e) => handleBlurInput(e.target.value, product)}
            />
            <button onClick={(e) => handleUpQty(product)} className="text-[16px] ml-2 inline-block px-2 py-2">
                +
            </button>
        </div>
    );
};

export const handleAddProduct = (product, listProductsAdd, dispatch) => {
    let x = 0;
    listProductsAdd.map((productList) => {
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

    dispatch(setIsOpenBag());
    return x;
};
