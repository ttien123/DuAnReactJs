import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import ButtonCst from '../../../components/ButtonCst/ButtonCst';
import useScrollAnimation from '../../../Hook/useScrollAnimation/useScrollAnimation';
function Footer() {
    const isAnimation = useScrollAnimation('.Footer');

    return (
        <section className="Footer bg-[#22100b] px-[15px] py-[80px] xl:py-[80px]">
            <div className="flex items-center justify-center">
                <ButtonCst className={'mr-2'} small>
                    <span
                        className={`group-hover:text-colorWeb my-[5px] mx-[20px] xl:translate-y-[100%] xl:opacity-0 ${
                            isAnimation ? 'xl:xl:animate-fadeInUpFooter' : ''
                        }`}
                    >
                        <FaFacebookF />
                    </span>
                </ButtonCst>

                <ButtonCst className={'mr-2'} small>
                    <span
                        className={`group-hover:text-colorWeb my-[5px] mx-[20px] xl:translate-y-[-100%] xl:opacity-0 ${
                            isAnimation ? 'xl:animate-fadeInDownFooter' : ''
                        }`}
                    >
                        <FaTwitter />
                    </span>
                </ButtonCst>

                <ButtonCst className={'mr-2'} small>
                    <span
                        className={`group-hover:text-colorWeb my-[5px] mx-[20px] xl:translate-y-[100%] xl:opacity-0 ${
                            isAnimation ? 'xl:animate-fadeInUpFooter' : ''
                        }`}
                    >
                        <AiOutlineGooglePlus className="text-[25px]" />
                    </span>
                </ButtonCst>

                <ButtonCst className={'mr-2'} small>
                    <span
                        className={`group-hover:text-colorWeb my-[5px] mx-[20px] xl:translate-y-[-100%] xl:opacity-0 ${
                            isAnimation ? 'xl:animate-fadeInDownFooter' : ''
                        }`}
                    >
                        <FaLinkedinIn />
                    </span>
                </ButtonCst>

                <ButtonCst className={'mr-2'} small>
                    <span
                        className={`group-hover:text-colorWeb my-[5px] mx-[20px] xl:translate-y-[100%] xl:opacity-0 ${
                            isAnimation ? 'xl:animate-fadeInUpFooter' : ''
                        }`}
                    >
                        <FaInstagram />
                    </span>
                </ButtonCst>

                <ButtonCst className={'mr-2'} small>
                    <span
                        className={`group-hover:text-colorWeb my-[5px] mx-[20px] xl:translate-y-[-100%] xl:opacity-0 ${
                            isAnimation ? 'xl:animate-fadeInDownFooter' : ''
                        }`}
                    >
                        <FaPinterestP />
                    </span>
                </ButtonCst>
            </div>
            <p className="mt-4 text-center text-white text-[13px] opacity-70">
                © 2023 MegaOne. Made With Love By Themesindustry
            </p>
        </section>
    );
}

export default Footer;
