import InForItem from '../../../components/InForItem/InForItem';
import cup from '../../../assets/img/imgItemInFor/coffee.png';
import smile from '../../../assets/img/imgItemInFor/smile.png';
import invest from '../../../assets/img/imgItemInFor/return-of-investment.png';

function InForCpn() {
    return (
        <section className='bg-[url("https://megaone.acrothemes.com/coffee/images/counter-bg.jpg")] bg-no-repeat bg-cover bg-center bg-fixed'>
            <div className="container py-[48px] grid grid-cols-2 lg:grid-cols-4 gap-[30px] lg:gap-x-[30px]">
                <InForItem src={cup} number={'3785'} description={'Coffee Cups'} />
                <InForItem src={smile} number={'2995'} description={'Customers'} />
                <InForItem src={cup} number={'1559'} description={'Cup of Tea'} />
                <InForItem src={invest} number={'1990'} description={'Since'} />
            </div>
        </section>
    );
}

export default InForCpn;
