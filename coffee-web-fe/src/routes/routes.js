import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout/MainLayout';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import LayoutPrDetail from '../layouts/LayoutPrDetail/LayoutPrDetail';

const publicRoutes = [
    { path: '/', namePage: 'Home', component: Home, layout: MainLayout },
    { path: 'productDetail', namePage: 'ProductDetail', component: ProductDetail, layout: MainLayout },
];

export { publicRoutes };
