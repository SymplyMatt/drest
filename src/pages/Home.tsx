import CategoriesSlider from "../components/home/CategoriesSlider";
import Header from "../components/common/Header";
import HeroSlider from "../components/home/HeroSlider";
import CategoriesAndProducts from "../components/home/CategoriesAndProducts";
import FeaturedBrands from "../components/home/FeaturedBrands";
import NewArrivals from "../components/home/NewArrivals";
import Footer from "../components/common/Footer";

const Home = () => {
    return (
        <>
            <div className="flex flex-col w-full items-center gap-[24px]">
                <Header />
                <HeroSlider />
                <CategoriesSlider />
                <CategoriesAndProducts title="Recommended"/>
                <NewArrivals />
                <CategoriesAndProducts title="Trending"/>
                <FeaturedBrands />
            </div>
            <Footer />
        </>
  )
}

export default Home