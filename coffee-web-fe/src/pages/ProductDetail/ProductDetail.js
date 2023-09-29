import React from 'react';
import HeaderStatic from '../../layouts/components/HeaderStatic';
import useGetProductsAdd from '../../Hook/useGetProductsAdd/useGetProductsAdd';
import InfoPrDetail from '../../layouts/components/InfoPrDetail';

const ProductDetail = () => {
    useGetProductsAdd();
    return (
        <div className="">
            <HeaderStatic isPrDetail />
            <InfoPrDetail />
        </div>
    );
};

export default ProductDetail;
