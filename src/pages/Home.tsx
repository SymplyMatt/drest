import CategoriesSlider from "../components/home/CategoriesSlider";
import HeroSlider from "../components/home/HeroSlider";
import CategoriesAndProducts from "../components/home/CategoriesAndProducts";
import FeaturedBrands from "../components/home/FeaturedBrands";
import NewArrivals from "../components/home/NewArrivals";
import Layout from "./Layout";

const Home = () => {
    return (
        <Layout>
            <HeroSlider />
            <CategoriesSlider />
            <CategoriesAndProducts title="Recommended"/>
            <NewArrivals />
            <CategoriesAndProducts title="Trending"/>
            <FeaturedBrands />
        </Layout>
    );
}

export default Home;
