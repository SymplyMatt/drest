import CategoriesSlider from "../components/home/CategoriesSlider";
import Header from "../components/common/Header";
import HeroSlider from "../components/home/HeroSlider";

const Home = () => {
    return (
      <div className="flex flex-col w-full items-center gap-[24px]">
            <Header />
            <HeroSlider />
            <CategoriesSlider />
            <div className="w-full flex flex-col items-center gap-[24px] mb-[50px]">
                <div className="w-full flex flex-col gap-[20px] justify-center px-[50px]">
                    <div className="w-full flex items-center justify-between h-[48px]">
                        <div className="flex items-center gap-[32px]">
                            <div className="text-[24px] font-semibold leading-[32.78px] tracking-[0%]">Recommended</div>
                            <div className="flex items-center gap-[24px]">
                                <img src="/src/assets/images/line_sm.svg" />
                                <div className="h-[43px] bg-[#2B2B2B] text-white flex items-center justify-center p-[12px] text-[14px] font-semibold leading-[19.12px] tracking-[0%] cursor-pointer">WOMEN'S</div>
                                <div className="flex items-center justify-center text-[14px] font-medium leading-[19.12px] tracking-[0%] cursor-pointer">MEN'S</div>
                                <div className="flex items-center justify-center text-[14px] font-medium leading-[19.12px] tracking-[0%] cursor-pointer">CHILDREN'S</div>
                                <div className="flex items-center justify-center text-[14px] font-medium leading-[19.12px] tracking-[0%] cursor-pointer">BEAUTY</div>
                                <div className="flex items-center justify-center text-[14px] font-medium leading-[19.12px] tracking-[0%] cursor-pointer">HOME+LIFESTYLE</div>
                            </div>
                        </div>
                        <div className="h-[48px] bg-white border border-black px-[36px] py-[12px] cursor-pointer flex items-center justify-center font-semibold leading-[24px] tracking-[0%]">VIEW ALL</div>
                    </div>
                    <div className="h-[1px] bg-[#E6E6E6] w-full"></div>
                </div>
                <div className="w-full grid grid-cols-4">
                    <div className="col-span-1 flex flex-col items-center h-[480px]">
                        <div className="w-full h-[400px] bg-[#F3F3F3] border border-[#E6E6E6] flex items-center justify-center relative">
                            <img src="/src/assets/images/recommended1.png" className="w-full h-full object-cover"/>
                            <img src="/src/assets/images/heart.svg" className="cursor-pointer absolute top-[20px] right-[10px]" />
                            <div className=" absolute top-[20px] left-[10px] h-[28px] bg-[#8F0024] p-[10px] flex justify-center items-center text-white text-[14px] font-semibold leading-[21px] tracking-[-4%] gap-[8px]"><img src="/src/assets/images/discountbadge.svg" /> 40% OFF</div>
                            <img src="/src/assets/images/rec_plus.svg" className="cursor-pointer absolute bottom-[20px] right-[10px]" />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-[4px] h-[80px] border-b border-l border-r border-[#E6E6E6] w-full">
                            <div className="text-[18px] leading-[27px] tracking-[0%]">Ocean breeze varsity jacket</div>
                            <div className="text-[18px] font-semibold leading-[26px] tracking-[-5%]">120.00 TND</div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  )
}

export default Home