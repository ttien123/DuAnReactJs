function HeadingCpn({ img, title, heading, description, isNotMb, isAnimation }) {
    return (
        <div
            className={`max-w-[90%] lg:max-w-[66.666667%] xl:opacity-0 mx-auto mb-[60px] lg:mb-[100px] ${
                isAnimation ? 'xl:animate-fadeIn' : ''
            } ${isNotMb ? '!mb-0' : ''}`}
        >
            <div className={`${img ? 'block' : 'hidden'}`}>
                <img
                    src="https://megaone.acrothemes.com/coffee/images/gallery-border.png"
                    alt="Logo"
                    className="mx-auto"
                />
            </div>
            <h4
                className={`${
                    title ? 'block' : 'hidden'
                } text-[18px] lg:text-[24px] text-colorTextWeb text-center mt-[24px] mb-[8px]`}
            >
                Top quality coffee
            </h4>
            <h2
                className={` ${
                    heading ? 'block' : 'hidden'
                } font-Montserrat text-[28px] lg:text-[48px] my-[24px] text-colorWeb font-bold text-center`}
            >
                {heading}
            </h2>
            <p className={`${description ? 'block' : 'hidden'} lg:text-T16 text-center text-[14px] text-colorTextWeb`}>
                Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s
                standard dummy. Lorem Ipsum has been the industry’s standard dummy.
            </p>
        </div>
    );
}

export default HeadingCpn;
