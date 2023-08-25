function InForItem({ src, number, description }) {
    return (
        <div className="text-center text-white">
            <div className="mb-[20px]">
                <img src={src} alt="Item" className="mx-auto w-[40px]" />
            </div>
            <div className="text-[36px] mx-[15px]">{number}</div>
            <p className="text-[16px] mb-2">{description}</p>
        </div>
    );
}

export default InForItem;
