import CategoriesSlider from "../components/home/CategoriesSlider";
import Header from "../components/common/Header";
import HeroSlider from "../components/home/HeroSlider";
import CategoriesAndProducts from "../components/home/CategoriesAndProducts";
import GridSlider from "../components/home/GridSlider";
import FeaturedBrands from "../components/home/FeaturedBrands";

const Home = () => {
    return (
      <div className="flex flex-col w-full items-center gap-[24px]">
            <Header />
            <HeroSlider />
            <CategoriesSlider />
            <CategoriesAndProducts title="Recommended"/>
            <div className="w-full flex flex-col items-center gap-[24px] mb-[40px]">
                <div className="w-full flex items-center justify-between h-[48px] px-[50px]">
                    <div className="w-full flex items-center gap-[32px]">
                        <div className="text-[48px] font-normal leading-[32.78px] tracking-[0%]">New Arrivals</div>
                    </div>
                    <div className="h-[48px] bg-white border border-black px-[36px] py-[12px] cursor-pointer flex items-center justify-center font-semibold leading-[24px] tracking-[0%] whitespace-nowrap">VIEW ALL NEW</div>
                </div>
                <GridSlider />
            </div>
            <CategoriesAndProducts title="Trending"/>
            <FeaturedBrands />
      </div>
  )
}

export default Home