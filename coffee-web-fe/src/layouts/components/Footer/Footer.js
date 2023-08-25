import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import ButtonCst from '../../../components/ButtonCst/ButtonCst';

function Footer() {
    return (
        <section className="bg-[#22100b] px-[15px] py-[80px]">
            <div className="flex items-center justify-center">
                <ButtonCst className={'mr-2'} small>
                    <span className="group-hover:text-colorWeb my-[5px] mx-[20px]">
                        <FaFacebookF />
                    </span>
                </ButtonCst>
                <ButtonCst className={'mr-2'} small>
                    <span className="group-hover:text-colorWeb my-[5px] mx-[20px]">
                        <FaTwitter />
                    </span>
                </ButtonCst>
                <ButtonCst className={'mr-2'} small>
                    <span className="group-hover:text-colorWeb my-[5px] mx-[20px]">
                        <AiOutlineGooglePlus className="text-[25px]" />
                    </span>
                </ButtonCst>
                <ButtonCst className={'mr-2'} small>
                    <span className="group-hover:text-colorWeb my-[5px] mx-[20px]">
                        <FaLinkedinIn />
                    </span>
                </ButtonCst>
                <ButtonCst className={'mr-2'} small>
                    <span className="group-hover:text-colorWeb my-[5px] mx-[20px]">
                        <FaInstagram />
                    </span>
                </ButtonCst>
                <ButtonCst className={'mr-2'} small>
                    <span className="group-hover:text-colorWeb my-[5px] mx-[20px]">
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
