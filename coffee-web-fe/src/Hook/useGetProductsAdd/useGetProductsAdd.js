import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setListProductsAdded } from '../../reducer/ListProductsAddRedux/ListProductsAddRedux';

const useGetProductsAdd = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('List_Products_Added'))) {
            dispatch(setListProductsAdded(JSON.parse(localStorage.getItem('List_Products_Added'))));
        }
    }, []);
    return;
};

export default useGetProductsAdd;
