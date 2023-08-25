import { useEffect } from 'react';
import LoadingStart from '../../components/loading/loadingStart/LoadingStart';
import HeaderStatic from '../components/HeaderStatic';
import SideMenu from '../components/SideMenu/SideMenu';
import { useState } from 'react';

function MainLayout({ children }) {
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

    return (
        <div className="overflow-hidden">
            {/* <LoadingStart /> */}
            <HeaderStatic isFixed={isFixed} />
            <SideMenu />
            <main>{children}</main>
        </div>
    );
}

export default MainLayout;
