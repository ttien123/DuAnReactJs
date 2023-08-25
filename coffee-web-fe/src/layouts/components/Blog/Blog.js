import HeadingCpn from '../../../components/HeadingCpn/HeadingCpn';
import ButtonArrow from '../../../components/ButtonArrow';

function Blog() {
    return (
        <div className="grid grid-cols-2 bg-[#22100b] flex items-center justify-end">
            <div className="col-span-2 lg:col-span-1 text-white w-[90%] py-[80px] lg:py-0 lg:w-[60%] mx-auto">
                <h4 className="text-T16 mt-2 text-center lg:text-left">Dec 14, 2020</h4>
                <h2 className="text-[48px] font-Montserrat font-bold text-center lg:text-left">Coffee Blogs</h2>
                <p className="text-T16 mt-[35px] mb-[45px] text-center lg:text-left">
                    Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the
                    industry’s standard dummy. Lorem Ipsum has been the industry’s standard dummy.
                </p>
                <div className="w-[200px] mx-auto lg:mx-0 relative">
                    <ButtonArrow className={'!ml-0 !font-Montserrat'}>Read Blog</ButtonArrow>
                </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
                <img
                    src="https://megaone.acrothemes.com/coffee/images/blog-img.jpg"
                    alt="blog"
                    className="object-cover lg:min-h-[600px] w-full"
                />
            </div>
        </div>
    );
}

export default Blog;