import About from '../../layouts/components/About/About';
import Blog from '../../layouts/components/Blog/Blog';
import Footer from '../../layouts/components/Footer/Footer';
import InForCpn from '../../layouts/components/InforCpn/InforCpn';
import ListProducts from '../../layouts/components/ListProducts/ListProducts';
import Reviews from '../../layouts/components/Reviews/Reviews';
import Slides from '../../layouts/components/Slides/Slides';

function Home() {
    return (
        <div className="">
            <Slides />
            <About />
            <InForCpn />
            <ListProducts />
            <Blog />
            <Reviews />
            <Footer />
        </div>
    );
}

export default Home;
