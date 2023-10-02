import { useEffect, useState } from 'react';

const useScrollAnimation = (classElement, isBlog) => {
    const [isAnimation, setIsAnimation] = useState(false);
    useEffect(() => {
        const AboutElement = document.querySelector(classElement);
        const handleScroll = () => {
            if ((window.scrollY || document.documentElement.scrollTop) >= AboutElement.offsetTop - 400) {
                setIsAnimation(true);
            }
            if ((window.scrollY || document.documentElement.scrollTop) < AboutElement.offsetTop - 400) {
                setIsAnimation(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return isAnimation;
};

export default useScrollAnimation;
