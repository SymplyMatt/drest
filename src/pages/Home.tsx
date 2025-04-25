import HeroSlider from "../components/home/HeroSlider";
import CategoriesAndProducts from "../components/home/CategoriesAndProducts";
import FeaturedBrands from "../components/home/FeaturedBrands";
import NewArrivals from "../components/home/NewArrivals";
import Layout from "./Layout";
import FlashSales from "../components/home/FlashSales";
import RoundCategoriesSlider from "../components/home/RoundCategoriesSlider";
import Ads from "../components/home/Ads";
const Home = () => {
    return (
        <Layout>
            <HeroSlider />
            <RoundCategoriesSlider />
            <FlashSales />
            <CategoriesAndProducts title="Recommended"/>
            <NewArrivals />
            <CategoriesAndProducts title="Trending"/>
            <Ads />
            {/* <FeaturedBrands /> */}
        </Layout>
    );
}

export default Home;
