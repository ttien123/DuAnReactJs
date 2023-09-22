import LoadingStart from '../../components/loading/loadingStart/LoadingStart';
import SideMenu from '../components/SideMenu/SideMenu';
import MyBag from '../../components/Mybag/Mybag';
import MoBiMyBag from '../../components/MobiMyBag/MobiMyBag';

function MainLayout({ children }) {
    return (
        <div className="overflow-hidden">
            {/* <LoadingStart /> */}
            <MyBag />
            <SideMenu />
            <MoBiMyBag />
            <main>{children}</main>
        </div>
    );
}

export default MainLayout;
