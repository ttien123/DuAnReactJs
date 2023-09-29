import { useEffect, useState } from 'react';

const useScrollArrowTop = () => {
    const [isArrowTop, setIsArrowTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if ((window.scrollY || document.documentElement.scrollTop) >= 250) {
                setIsArrowTop(true);
            }
            if ((window.scrollY || document.documentElement.scrollTop) < 250) {
                setIsArrowTop(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return isArrowTop;
};

export default useScrollArrowTop;
