import CategoriesSlider from "../components/home/CategoriesSlider";
import HeroSlider from "../components/home/HeroSlider";
import CategoriesAndProducts from "../components/home/CategoriesAndProducts";
import FeaturedBrands from "../components/home/FeaturedBrands";
import NewArrivals from "../components/home/NewArrivals";
import Layout from "./Layout";
import FlashSales from "../components/home/FlashSales";

const Home = () => {
    return (
        <Layout>
            <HeroSlider />
            <CategoriesSlider />
            <FlashSales />
            <CategoriesAndProducts title="Recommended"/>
            <NewArrivals />
            <CategoriesAndProducts title="Trending"/>
            <FeaturedBrands />
        </Layout>
    );
}

export default Home;
