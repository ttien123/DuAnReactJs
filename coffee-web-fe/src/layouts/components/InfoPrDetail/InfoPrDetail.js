import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../apis/list.api';
import { useQuery } from 'react-query';
import ListSellingPr from '../ListSellingPr/ListSellingPr';
import { handleAddProduct } from '../../../components/HandleQtyPr/HandleQtyPr';
import CtmComment from '../../../components/CtmComment/CtmComment';
import FormComment from '../../../components/FormComment/FormComment';

const InfoPrDetail = () => {
    const listProductsAdd = useSelector((state) => state.listProductsRedux.listProducts);
    const dispatch = useDispatch();

    const { id } = useParams();
    const [product, setProduct] = useState({});

    const productQuery = useQuery({
        queryKey: ['product', id],
        queryFn: () => getProduct(id),
        enabled: id !== undefined,
        staleTime: 1000 * 10,
    });

    useEffect(() => {
        if (productQuery.data) {
            setProduct(productQuery.data.data);
        }
    }, [productQuery.data]);

    return (
        <div className="mt-[50px] xl:mt-[100px]">
            <div className="container px-[15px] xl:p-0">
                <div className="flex pt-8 flex-col md:flex-row text-center md:text-left">
                    <div className="w-full md:w-[40%]">
                        <img src={product.url} alt="Product" className="w-full h-[350px]" />
                    </div>
                    <div className="md:w-[60%] w-full p-4 pl-8">
                        <h1 className=" mb-4 font-medium text-center md:text-left">{product.name}</h1>
                        <h2 className="text-[25px] mb-4 font-semibold text-red-600 text-center md:text-left">
                            {product.price}$
                        </h2>
                        <p className="text-[18px] font-normal tracking-normal">{product.description}</p>

                        <button
                            onClick={(e) => handleAddProduct(product, listProductsAdd, dispatch)}
                            className="mt-8 py-2 px-4 border-[1px] border-colorWeb rounded-lg text-[16px] hover:bg-colorWeb hover:text-white transition-all duration-500"
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="mt-8 border-[1px] border-[#ced4da] p-4 md:p-8">
                    <h3 className="text-center font-semibold text-colorWeb text-[36px]">Customer Review</h3>
                    <CtmComment />
                    <CtmComment />
                    <div className="mt-16 border-t-[1px] relative border-[#ced4da]">
                        <span className="text-[20px] absolute top-[-25px] inline-block pr-4 py-2 bg-white font-medium">
                            Add Review
                        </span>
                        <FormComment />
                    </div>
                </div>
            </div>
            <ListSellingPr />
        </div>
    );
};

export default InfoPrDetail;
