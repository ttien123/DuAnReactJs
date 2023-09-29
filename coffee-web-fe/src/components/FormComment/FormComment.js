import React from 'react';

const FormComment = () => {
    return (
        <form className="mt-8">
            <div className="flex items-center justify-between mb-4 flex-col md:flex-row">
                <input
                    type="text"
                    placeholder="Name"
                    className="xl:w-[500px] w-full md:w-[320px] lg::w-[420px] px-4 py-2 outline-none rounded-md border-[1px] focus:border-colorWeb transition-all duration-500"
                />
                <input
                    type="text"
                    placeholder="Email"
                    className="xl:w-[500px] w-full md:w-[320px] lg::w-[420px] mt-4 md:mt-0 px-4 py-2 outline-none rounded-md border-[1px] focus:border-colorWeb transition-all duration-500"
                />
            </div>
            <h3 className="mb-4">Your Rating</h3>
            <textarea
                placeholder="Your Review"
                className="p-4 resize-none outline-none block w-full h-[135px] border-[1px] border-[#ced4da] focus:border-colorWeb transition-all duration-500"
                rows={5}
            ></textarea>
            <div className="md:text-right">
                <button className="mt-6 w-full md:w-auto py-2 px-4 border-[1px] border-colorWeb rounded-lg text-[16px] hover:bg-colorWeb hover:text-white transition-all duration-500">
                    Add Review
                </button>
            </div>
        </form>
    );
};

export default FormComment;
