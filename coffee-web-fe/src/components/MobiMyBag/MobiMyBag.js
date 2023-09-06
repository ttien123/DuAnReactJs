import { useMemo } from 'react';
import IconMyBag from '../IconMyBag/IconMyBag';
import { useSelector } from 'react-redux';

function MoBiMyBag({ setIsOpenBag }) {
    const listProductsAdded = useSelector((state) => state.listProductsRedux.listProducts);

    const handleOpenBag = () => {
        setIsOpenBag(true);
    };

    const total = useMemo(() => {
        const result =
            listProductsAdded &&
            listProductsAdded.reduce((result, product) => {
                return product.qty * product.price + result;
            }, 0);
        return result;
    }, [listProductsAdded]);

    return (
        <div className="xl:hidden w-full h-[50px] bg-white fixed left-0 right-0 bottom-0 z-[1000] flex items-center justify-end">
            <div>
                <IconMyBag isMoBi handleOpenBag={handleOpenBag} />
                <div className="mr-4 md:mr-8">
                    <span className="text-colorWeb text-[14px] md:text-T16">Total Price: {total}$</span>
                </div>
            </div>
            <div className="bg-colorWeb h-full text-white grid place-items-center">
                <button className="w-[120px] text-[14px] md:text-T16">Check Out</button>
            </div>
        </div>
    );
}

export default MoBiMyBag;
