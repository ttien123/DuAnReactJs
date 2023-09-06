import { BiShoppingBag } from 'react-icons/bi';
import ButtonCst from '../ButtonCst/ButtonCst';
import { useSelector } from 'react-redux';

function IconMyBag({ handleOpenBag, isMoBi }) {
    const listProductsAdd = useSelector((state) => state.listProductsRedux.listProducts);

    return (
        <div
            className={`${
                isMoBi ? '!block !left-[8%]' : ''
            } hidden xl:block absolute top-[50%] translate-y-[-50%] right-[12%]`}
        >
            <span className="absolute top-[17px] left-[19px] text-[12px] md:top-[17px] xl:text-white text-colorWeb">
                {listProductsAdd.length}
            </span>
            <ButtonCst
                className={`${
                    isMoBi ? '!border-colorWeb' : ''
                } border-white text-[20px] w-[45px] !h-[45px] rounded-[50%] flex items-center justify-center relative`}
                onClick={handleOpenBag}
            >
                <BiShoppingBag className={`${isMoBi ? 'text-colorWeb' : ''} text-[25px]`} />
            </ButtonCst>
        </div>
    );
}

export default IconMyBag;
