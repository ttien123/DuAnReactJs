import { useMemo } from 'react';

import { useSelector } from 'react-redux';

const TotalPriceProduct = () => {
    const listProductsAdded = useSelector((state) => state.listProductsRedux.listProducts);

    const result = useMemo(() => {
        const result =
            listProductsAdded &&
            listProductsAdded.reduce((total, product) => {
                if (product.qty) {
                    return product.qty * product.price + total;
                } else {
                    return total;
                }
            }, 0);
        return result;
    }, [listProductsAdded]);
    return result;
};

export default TotalPriceProduct;
