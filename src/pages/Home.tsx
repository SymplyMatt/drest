import CategoriesSlider from "../components/home/CategoriesSlider";
import Header from "../components/common/Header";
import HeroSlider from "../components/home/HeroSlider";

const Home = () => {
    return (
      <div className="flex flex-col w-full items-center gap-[24px]">
            <Header />
            <HeroSlider />
            <CategoriesSlider />
            <div className="w-full px-[60px] flex flex-col items-center gap-[24px] mb-[50px]">
                <div className="w-full flex items-center justify-between h-[48px]">
                    <div className="flex items-center gap-[32px]">
                        <div className="text-[24px] font-semibold leading-[32.78px] tracking-[0%]">Recommended</div>
                        <div className="flex items-center gap-[24px]">
                            <img src="/src/assets/images/line_sm.svg" />
                            <div className="h-[43px] bg-[#2B2B2B] text-white flex items-center justify-center p-[12px] text-[14px] font-semibold leading-[19.12px] tracking-[0%]">WOMEN'S</div>
                            <div className="flex items-center justify-center text-[14px] font-medium leading-[19.12px] tracking-[0%]">MEN'S</div>
                            <div className="flex items-center justify-center text-[14px] font-medium leading-[19.12px] tracking-[0%]">CHILDREN'S</div>
                            <div className="flex items-center justify-center text-[14px] font-medium leading-[19.12px] tracking-[0%]">BEAUTY</div>
                            <div className="flex items-center justify-center text-[14px] font-medium leading-[19.12px] tracking-[0%]">HOME+LIFESTYLE</div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  )
}

export default Home