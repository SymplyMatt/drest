import CategoriesSlider from "../components/home/CategoriesSlider";
import HeroSlider from "../components/home/HeroSlider";
import CategoriesAndProducts from "../components/home/CategoriesAndProducts";
import FeaturedBrands from "../components/home/FeaturedBrands";
import NewArrivals from "../components/home/NewArrivals";
import Layout from "./Layout";
import UpsellSlider from "../components/product/UpsellSlider";

const Home = () => {
    return (
        <Layout>
            <HeroSlider />
            <CategoriesSlider />
            <div className="w-full flex-col items-center justify-center">
                <div className="w-full h-[60px] bg-[#BD3322] flex items-center justify-between px-[50px]">
                    <div className="text-[#FFFFFF] font-bold">FLASH SALE</div>
                    <div className="flex items-center text-white gap-[8px]"><span className="leading-[100%] tracking-[2%]">Time Left:</span> <span className="font-bold">02h : 47m : 05s</span></div>
                    <div className="uppercase text-white underline text-[16px] font-medium leading-[24px] tracking-[0%] cursor-pointer">see all</div>
                </div>
                <UpsellSlider showTitle={false} />
            </div>
            <CategoriesAndProducts title="Recommended"/>
            <NewArrivals />
            <CategoriesAndProducts title="Trending"/>
            <FeaturedBrands />
        </Layout>
    );
}

export default Home;
