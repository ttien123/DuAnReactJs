import { useState } from 'react';
import IconMyBag from '../../components/IconMyBag/IconMyBag';
import MoBiMyBag from '../../components/MobiMyBag/MobiMyBag';
import MyBag from '../../components/Mybag/Mybag';
import HeaderStatic from '../components/HeaderStatic';

const LayoutPrDetail = ({ children }) => {
    const [isFixed, setIsFixed] = useState(false);

    return (
        <div>
            {/* <HeaderStatic isFixed={isFixed} />
            <MyBag />
            <MoBiMyBag /> */}
            <main>{children}</main>
        </div>
    );
};

export default LayoutPrDetail;
