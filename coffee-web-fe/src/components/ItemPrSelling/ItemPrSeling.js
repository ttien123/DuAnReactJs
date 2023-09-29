import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import OverlayProduct from '../OverlayProduct/OverlayProduct';

const ItemPrSelling = ({ product }) => {
    return (
        <div className="w-[255px] mx-auto p-[15px] border-[1px] group">
            <div className="w-full relative group overflow-hidden">
                <img
                    src={product.url}
                    alt="Product"
                    className="h-[200px] w-full group-hover:scale-[120%] transition-all duration-500"
                />
                <OverlayProduct product={product} isSelling />
            </div>
            <div className="mt-4">
                <h5 className="font-light text-center mb-2">Category</h5>
                <h3 className="text-[25px] text-center mb-2 font-medium group-hover:text-colorWeb transition-all duration-500">
                    {product.name}
                </h3>
                <div className="flex justify-center items-center">
                    <AiFillStar className="mr-1 text-[20px]" />
                    <AiFillStar className="mr-1 text-[20px]" />
                    <AiFillStar className="mr-1 text-[20px]" />
                    <AiFillStar className="mr-1 text-[20px]" />
                    <AiFillStar className="text-[20px]" />
                </div>
            </div>
        </div>
    );
};

export default ItemPrSelling;
