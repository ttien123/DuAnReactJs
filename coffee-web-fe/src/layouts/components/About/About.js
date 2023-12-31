import HeadingCpn from '../../../components/HeadingCpn/HeadingCpn';
import ItemAbout from '../../../components/ItemAbout/ItemAbout';

import cup from '../../../assets/img/imgItemAbout/cup.png';
import juice from '../../../assets/img/imgItemAbout/orange-juice.png';
import smile from '../../../assets/img/imgItemAbout/smile.png';

import { Element } from 'react-scroll';
import useScrollAnimation from '../../../Hook/useScrollAnimation/useScrollAnimation';

function About() {
    const isAnimation = useScrollAnimation('.About');

    return (
        <Element name="about">
            <section className="About overflow-hidden container mx-auto">
                <HeadingCpn img title heading={'Best Coffee in Town'} description isAnimation={isAnimation} />
                <div className="grid grid-cols-3">
                    <div
                        className={`col-span-3 lg:col-span-1 ml-4 xl:translate-x-[-100%] ${
                            isAnimation ? 'xl:animate-fadeLeft' : ''
                        }`}
                    >
                        <ItemAbout
                            src={cup}
                            title={'We are food lovers'}
                            description={
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim viverra ultrices.'
                            }
                        />
                        <ItemAbout
                            src={juice}
                            title={'Diversity in food'}
                            description={
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim viverra ultrices.'
                            }
                        />
                        <ItemAbout
                            src={smile}
                            title={'100% Free Delivery'}
                            description={
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim viverra ultrices.'
                            }
                        />
                    </div>
                    <div
                        className={`col-span-3 lg:col-span-1 my-[88px] xl:opacity-0 lg:my-0 xl:translate-y-[100%] ${
                            isAnimation ? 'xl:animate-fadeInUp' : ''
                        }`}
                    >
                        <img
                            src="https://megaone.acrothemes.com/coffee/images/about-img.png"
                            alt="Product"
                            className={`mx-auto w-[50%] lg:w-[75%]`}
                        />
                    </div>
                    <div
                        className={`col-span-3 lg:col-span-1 ml-4 xl:translate-y-[100%] ${
                            isAnimation ? 'xl:animate-fadeRight' : ''
                        }`}
                    >
                        <ItemAbout
                            src={cup}
                            title={'We are food lovers'}
                            description={
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim viverra ultrices.'
                            }
                        />
                        <ItemAbout
                            src={juice}
                            title={'Diversity in food'}
                            description={
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim viverra ultrices.'
                            }
                        />
                        <ItemAbout
                            src={smile}
                            title={'100% Free Delivery'}
                            description={
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim viverra ultrices.'
                            }
                        />
                    </div>
                </div>
            </section>
        </Element>
    );
}

export default About;
