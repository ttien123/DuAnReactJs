import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout/MainLayout';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import Checkout from '../pages/Checkout';
import CheckoutLayout from '../layouts/CheckoutLayout/CheckoutLayout';

const publicRoutes = [
    { path: '/', namePage: 'Home', component: Home, layout: MainLayout },
    { path: 'productDetail/:id', namePage: 'ProductDetail', component: ProductDetail, layout: MainLayout },
    { path: 'checkout', namePage: 'Checkout', component: Checkout, layout: CheckoutLayout },
];

export { publicRoutes };
