import LoadingStart from '../../components/loading/loadingStart/LoadingStart';
import SideMenu from '../components/SideMenu/SideMenu';
import MyBag from '../../components/Mybag/Mybag';
import MoBiMyBag from '../../components/MobiMyBag/MobiMyBag';
import { useIsFetching, useIsMutating } from 'react-query';
import ArrowToTop from '../components/ArrowToTop/ArrowToTop';
import useScrollArrowTop from '../../Hook/useScrollArrowTop/useScrollArrowTop';

function MainLayout({ children }) {
    const isFetching = useIsFetching();
    const isMutating = useIsMutating();
    const isArrowTop = useScrollArrowTop();
    return (
        <div className="overflow-hidden">
            {isFetching + isMutating > 0 && <LoadingStart />}
            <MyBag />
            <SideMenu />
            <ArrowToTop isArrowTop={isArrowTop} />
            <MoBiMyBag />
            <main>{children}</main>
        </div>
    );
}

export default MainLayout;
