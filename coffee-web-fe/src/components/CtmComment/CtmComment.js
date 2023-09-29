import React from 'react';

const CtmComment = () => {
    return (
        <div className="flex mt-8">
            <div className="w-[80px] md:w-[130px] mr-4 md:mr-8">
                <img src="https://megaone.acrothemes.com/food-shop/img/p1.jpg" alt="Img" />
            </div>
            <div className="flex-1">
                <h4 className="text-[14px]">27 Aug 2017</h4>
                <h3 className="text-[25px] md:text-[30px] font-medium">Media heading</h3>
                <p className="text-[14px] mt-2">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                    quia non numquam eius modi tempora incidunt ut labore et dolore magnam.
                </p>
            </div>
        </div>
    );
};

export default CtmComment;
