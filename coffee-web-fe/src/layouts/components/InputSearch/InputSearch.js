import React from 'react';

const InputSearch = ({ isSearch }) => {
    return (
        <div className={`${isSearch ? 'w-[80%]' : ''}`}>
            <input
                type="text"
                placeholder="Search Product"
                className={`${
                    isSearch ? 'block w-full h-full' : 'hidden xl:w-[400px] xl:block'
                } p-4 h-[35px] outline-none`}
            />
        </div>
    );
};

export default InputSearch;
