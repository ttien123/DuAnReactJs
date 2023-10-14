import { useMemo } from 'react';
import IconMyBag from '../IconMyBag/IconMyBag';
import { useSelector, useDispatch } from 'react-redux';
import { setOpenSideMenu } from '../../reducer/reducerSideMenu/SideMenu.reducer';
import { setIsOpenBag } from '../../reducer/openMyBag/openMyBag';
import TotalPriceProduct from '../TotalPriceProduct/TotalPriceProduct';
import { Link } from 'react-router-dom';

function MoBiMyBag() {
    const listProductsAdded = useSelector((state) => state.listProductsRedux.listProducts);
    const dispatch = useDispatch();

    const handleOpenBag = () => {
        dispatch(setIsOpenBag());
        dispatch(setOpenSideMenu(false));
    };

    const total = TotalPriceProduct();

    return (
        <div
            className={`xl:hidden w-full h-[50px] bg-white fixed left-0 right-0 bottom-0 z-[1000] ${
                listProductsAdded.length > 0 ? 'flex' : 'hidden'
            } items-center justify-end`}
            onClick={handleOpenBag}
        >
            <div>
                <IconMyBag isMoBi />
                <div className="mr-4 md:mr-8">
                    <span className="text-colorWeb text-[14px] md:text-T16">Total Price: {total}$</span>
                </div>
            </div>
            <div
                className="bg-colorWeb h-full z-[100] text-white grid place-items-center"
                onClick={(e) => e.stopPropagation()}
            >
                <Link to="/checkout" className="w-[120px] block text-center text-[14px] md:text-T16">
                    Check Out
                </Link>
            </div>
        </div>
    );
}

export default MoBiMyBag;
