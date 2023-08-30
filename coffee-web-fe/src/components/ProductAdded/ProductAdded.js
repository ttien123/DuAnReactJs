import { BiTrash } from 'react-icons/bi';

function ProductAdded() {
    return (
        <div className="flex xl:p-[10px] p-[16px] w-full xl:w-[270px] mb-[10px]">
            <div className="w-[100px] h-[100px]">
                <img src="https://megaone.acrothemes.com/food-shop/img/item1.jpg" alt="Product" />
            </div>
            <div className="text-[#2D2D2D] p-[10px] flex-1">
                <h5 className="text-[#2D2D2D] text-[17px] font-medium">Product Name</h5>
                <div className="text-[#2D2D2D] text-[14px] opacity-80">Qty: 2</div>
                <div className="flex items-center justify-between">
                    <span className="text-[#2D2D2D] text-[14px] opacity-80">Price: $300</span>
                    <span>
                        <BiTrash />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProductAdded;
