import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../apis/list.api';
import { useQuery } from 'react-query';
import ListSellingPr from '../ListSellingPr/ListSellingPr';
import { handleAddProduct } from '../../../components/HandleQtyPr/HandleQtyPr';

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
        <div className="mt-[100px]">
            <div className="container">
                <div className="flex pt-8 ">
                    <div className="w-[40%]">
                        <img src={product.url} alt="Product" className="w-full h-[350px]" />
                    </div>
                    <div className="w-[60%] p-4 pl-8">
                        <h1 className=" mb-4 font-medium">{product.name}</h1>
                        <h2 className="text-[25px] mb-4 font-semibold text-red-600">{product.price}$</h2>
                        <p className="text-[18px] font-normal tracking-normal">{product.description}</p>

                        <button
                            onClick={(e) => handleAddProduct(product, listProductsAdd, dispatch)}
                            className="mt-8 py-2 px-4 border-[1px] border-colorWeb rounded-lg text-[16px] hover:bg-colorWeb hover:text-white transition-all duration-500"
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="mt-8 border-[1px] border-[#ced4da] p-8">
                    <h3 className="text-center font-semibold text-colorWeb text-[36px]">Customer Review</h3>
                    <div className="flex mt-8">
                        <div className="w-[130px] mr-8">
                            <img src="https://megaone.acrothemes.com/food-shop/img/p1.jpg" alt="Img" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-T16">27 Aug 2017</h4>
                            <h3 className="text-[30px] font-medium">Media heading</h3>
                            <p className="text-[16px] mt-2">
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.
                            </p>
                        </div>
                    </div>
                    <div className="flex mt-8">
                        <div className="w-[130px] mr-8">
                            <img src="https://megaone.acrothemes.com/food-shop/img/p1.jpg" alt="Img" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-T16">27 Aug 2017</h4>
                            <h3 className="text-[30px] font-medium">Media heading</h3>
                            <p className="text-[16px] mt-2">
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.
                            </p>
                        </div>
                    </div>
                    <div className="mt-16 border-t-[1px] relative border-[#ced4da]">
                        <span className="text-[20px] absolute top-[-25px] inline-block pr-4 py-2 bg-white font-medium">
                            Add Review
                        </span>
                        <form className="mt-8">
                            <div className="flex items-center justify-between mb-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-[520px] px-4 py-2 outline-none rounded-md border-[1px] focus:border-colorWeb transition-all duration-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="w-[520px] px-4 py-2 outline-none rounded-md border-[1px] focus:border-colorWeb transition-all duration-500"
                                />
                            </div>
                            <h3 className="mb-4">Your Rating</h3>
                            <textarea
                                placeholder="Your Review"
                                className="p-4 resize-none outline-none block w-full h-[135px] border-[1px] border-[#ced4da] focus:border-colorWeb transition-all duration-500"
                                rows={5}
                            ></textarea>
                            <button className="mt-6 py-2 px-4 border-[1px] border-colorWeb rounded-lg text-[16px] hover:bg-colorWeb hover:text-white transition-all duration-500">
                                Add Review
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <ListSellingPr />
        </div>
    );
};

export default InfoPrDetail;
