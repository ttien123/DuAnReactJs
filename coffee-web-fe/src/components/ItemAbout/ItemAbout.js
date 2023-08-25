function ItemAbout({ src, title, description }) {
    return (
        <div className="block lg:flex mb-[48px] group">
            <div className="w-full lg:w-[30%]">
                <img
                    src={src}
                    alt="Item"
                    className="w-[70px] lg:w-[75%] mx-auto block mb-5 lg:mb-0 mt-3 group-hover:translate-y-[-10px] transition-all duration-500 ease-in-out"
                />
            </div>
            <div>
                <h3 className="text-[24px] mb-4 text-center lg:text-left">{title}</h3>
                <p className="text-[14px] text-center lg:text-left">{description}</p>
            </div>
        </div>
    );
}

export default ItemAbout;
