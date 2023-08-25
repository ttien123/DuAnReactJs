import HeadingCpn from '../../../components/HeadingCpn/HeadingCpn';
import { FaQuoteRight } from 'react-icons/fa';

function Reviews() {
    return (
        <section>
            <div className="container grid grid-cols-2 gap-x-[30px] px-[15px]">
                <div className="col-span-2 lg:col-span-1">
                    <img src="https://megaone.acrothemes.com/coffee/images/testimonial-img.png" alt="Img" />
                </div>
                <div className="col-span-2 lg:col-span-1 mt-8">
                    <HeadingCpn img heading={'Coffee Lovers'} isNotMb />
                    <div>
                        <div className="my-[25px] text-[25px] text-[#e7bd91]">
                            <FaQuoteRight className="mx-auto" />
                        </div>
                        <p className="text-[18px] font-normal text-center mb-[25px] leading-[1.8]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus
                            diam. Mauris malesuada, nisl non rutrum commodo.
                        </p>
                        <div className="text-center">
                            <div className="w-[100px] h-[100px] rounded-full overflow-hidden mx-auto mb-5 mt-8">
                                <img src="https://megaone.acrothemes.com/coffee/images/review-3.jpg" alt="Member" />
                            </div>
                            <p className="text-[24px] mb-8">Steve Smith</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;