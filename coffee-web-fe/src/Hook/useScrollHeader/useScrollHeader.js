import React, { useEffect, useState } from 'react';

const useScrollHeader = () => {
    const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if ((window.scrollY || document.documentElement.scrollTop) >= 182) {
                setIsFixed(true);
            }
            if ((window.scrollY || document.documentElement.scrollTop) < 182) {
                setIsFixed(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return isFixed;
};

export default useScrollHeader;
