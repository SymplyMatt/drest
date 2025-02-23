import CategoriesSlider from "../components/home/CategoriesSlider";
import Header from "../components/common/Header";
import HeroSlider from "../components/home/HeroSlider";
import CategoriesAndProducts from "../components/home/CategoriesAndProducts";
import FeaturedBrands from "../components/home/FeaturedBrands";
import NewArrivals from "../components/home/NewArrivals";

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
            <div className="w-full flex flex-col justify-center items-center gap-[24px]">
                <div className="w-full bg-[#DCBF89] h-[225px] grid grid-cols-2 px-[10%] py-[50px] gap-[0px]">
                    <div className="flex flex-col col-span-1 justify-center">
                        <div className="w-[78%] flex flex-col justify-center gap-[16px]">
                            <div className="text-[36px] font-bold leading-[36px] tracking-[0%] uppercase text-justify">Get the latest updates and exclusive offers</div>
                            <div className="text-[18px] font-normal leading-[24px] tracking-[0%]">Sign-up  to receive DREST emails and get updates on new arrivals, sales, exclusive offers, and more!</div>
                        </div>
                    </div>
                    <div className="flex flex-col col-span-1 justify-center gap-[12px]">
                        <div className="text-[14px] font-bold leading-[19.12px] tracking-[0%]">Enter email address*</div>
                            <div className="w-full grid grid-cols-[1fr_157px] items-center gap-[20px]"> 
                                <input type="text" className="h-[46px] border border-black outline-none focus:outline-none w-full"/> 
                                <div className="h-[48px] w-[157px] bg-[#000000] border border-black px-[36px] text-white cursor-pointer flex items-center justify-center uppercase text-[18px] font-semibold leading-[24px] tracking-[2%] transition-transform duration-200 hover:scale-[0.9]">
                                    Subscribe
                                </div>
                            </div>
                        <div className="w-full grid grid-cols-[1fr_157px] items-center justify-center gap-[20px]">
                            <div className="text-[14px] font-normal leading-[19.12px] tracking-[0%] text-justify w-full">*By entering my email address, i agree to receive DREST offers, promotions, other commercial messages related to our partners.</div>
                            <div className=" w-[157px]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Home