import HeroSlider from "../components/home/HeroSlider";
import CategoriesAndProducts from "../components/home/CategoriesAndProducts";
import FeaturedBrands from "../components/home/FeaturedBrands";
import NewArrivals from "../components/home/NewArrivals";
import Layout from "./Layout";
import FlashSales from "../components/home/FlashSales";
import RoundCategoriesSlider from "../components/home/RoundCategoriesSlider";
import Ads from "../components/home/Ads";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
const Home = () => {
    const { categories, products } = useSelector((state: RootState) => state.app);

    return (
        <Layout>
            <HeroSlider />
            <RoundCategoriesSlider categories={categories}/>
            <FlashSales />
            <CategoriesAndProducts title="Recommended" productsToDisplay={products}/>
            <NewArrivals />
            <CategoriesAndProducts title="Trending" productsToDisplay={products}/>
            <Ads />
            <FeaturedBrands />
        </Layout>
    );
}

export default Home;
