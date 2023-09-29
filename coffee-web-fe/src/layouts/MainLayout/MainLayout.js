import LoadingStart from '../../components/loading/loadingStart/LoadingStart';
import SideMenu from '../components/SideMenu/SideMenu';
import MyBag from '../../components/Mybag/Mybag';
import MoBiMyBag from '../../components/MobiMyBag/MobiMyBag';
import { useIsFetching, useIsMutating } from 'react-query';

function MainLayout({ children }) {
    const isFetching = useIsFetching();
    const isMutating = useIsMutating();
    return (
        <div className="overflow-hidden">
            {isFetching + isMutating > 0 && <LoadingStart />}
            <MyBag />
            <SideMenu />
            <MoBiMyBag />
            <main>{children}</main>
        </div>
    );
}

export default MainLayout;
