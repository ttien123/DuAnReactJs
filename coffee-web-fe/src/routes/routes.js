import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout/MainLayout';
import ProductDetail from '../pages/ProductDetail/ProductDetail';

const publicRoutes = [
    { path: '/', namePage: 'Home', component: Home, layout: MainLayout },
    { path: 'productDetail/:id', namePage: 'ProductDetail', component: ProductDetail, layout: MainLayout },
];

export { publicRoutes };
