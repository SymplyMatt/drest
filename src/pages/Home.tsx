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
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full bg-[#DCBF89] grid grid-cols-2 px-[10%] py-[50px] gap-[0px]">
                    <div className="flex flex-col col-span-1 justify-center">
                        <div className="w-[78%] flex flex-col justify-center gap-[16px]">
                            <div className="text-[36px] font-bold leading-[36px] tracking-[0%] uppercase text-justify">Get the latest updates and exclusive offers</div>
                            <div className="text-[18px] font-normal leading-[24px] tracking-[0%]">Sign-up  to receive DREST emails and get updates on new arrivals, sales, exclusive offers, and more!</div>
                        </div>
                    </div>
                    <div className="flex flex-col col-span-1 justify-center gap-[12px]">
                        <div className="text-[14px] font-bold leading-[19.12px] tracking-[0%]">Enter email addresss<span className="text-[#8F0024]">*</span></div>
                            <div className="w-full grid grid-cols-[1fr_157px] items-center gap-[20px]"> 
                                <input type="text" className="h-[46px] border border-black outline-none focus:outline-none w-full"/> 
                                <div className="h-[48px] w-[157px] bg-[#000000] border border-black px-[36px] text-white cursor-pointer flex items-center justify-center uppercase text-[18px] font-semibold leading-[24px] tracking-[2%] transition-transform duration-200 hover:scale-[0.9]">
                                    Subscribe
                                </div>
                            </div>
                        <div className="w-full grid grid-cols-[1fr_157px] items-center justify-center gap-[20px]">
                            <div className="text-[14px] font-normal leading-[19.12px] tracking-[0%] text-justify w-full"><span className="text-[#8F0024]">*</span>By entering my email address, i agree to receive DREST offers, promotions, other commercial messages related to our partners.</div>
                            <div className=" w-[157px]"></div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full bg-black flex-col gap-[100px] text-[#E6E6E6] px-[30px] py-[70px]">
                    <div className="grid grid-cols-5 w-full gap-[50px]">
                        <div className="flex flex-col w-full gap-[50px] col-span-3 pr-[50px]">
                            <div className="grid grid-cols-3 gap-[100px] items-center justify-between">
                                <div className="flex flex-col text-white gap-[36px] col-span-1">
                                    <div className="uppercase text-[24px] font-semibold leading-[32.78px] tracking-[0%] text-white">TOP BRANDS</div>
                                    <div className="flex flex-col justify-center gap-[16px] text-[#E6E6E6]">
                                        <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">New Balance</div>
                                        <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">Adidas</div>
                                        <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">Birkenstock</div>
                                        <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">Nike</div>
                                        <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">All Brands</div>
                                    </div>
                                </div>
                                <div className="flex flex-col text-white gap-[36px] col-span-1">
                                    <div className="uppercase text-[24px] font-semibold leading-[32.78px] tracking-[0%]">HELP</div>
                                    <div className="flex flex-col justify-center gap-[16px] text-[#E6E6E6]">
                                        <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">Track Order</div>
                                        <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">Returns & Exchanges</div>
                                        <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">FAQ</div>
                                        <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">Contact Us</div>
                                        <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">Site Map</div>
                                    </div>
                                </div>
                                <div className="flex flex-col text-white gap-[36px] col-span-1">
                                    <div className="uppercase text-[24px] font-semibold leading-[32.78px] tracking-[0%]">LEGAL</div>
                                    <div className="flex flex-col justify-center gap-[16px] text-[#E6E6E6]">
                                        <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">Confidentiality Policy</div>
                                        <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">Terms & Conditions</div>
                                        <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">Cookie Policy</div>
                                        <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%] cursor-pointer">Accessibility</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[0.5px] bg-[#969696]"></div>
                        </div>
                        <div className="col-span-2 flex flex-col gap-[36px]">
                            <img src="/src/assets/images/logowhite.svg" className="h-[46px] w-[186px]"/>
                            <div className="text-[16px] font-normal leading-[28px] tracking-[0%] text-[#E6E6E6]">From Tunisian Vision 🇹🇳✨ to Global Fashion Fusion. Drest  is home to 20+ local and global brands  redefining Tunisian e-commerce since 2020. Born from the  adventure of two trailblazers, we sparked a style revolution, uniting  New Look UK, Havaianas, Timberland, and more under one roof. Discover a world where borders fade and trends unite. <span className="italic font-semibold">#FashionWithoutBorders #StyleRedefined</span></div>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-5 items-center gap-[50px]">
                        <div className="flex flex-col gap-[36px]  col-span-3 text-[#E6E6E6]">
                            <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%]">Accepted Payment methods</div>
                            <div className="flex items-center gap-[36px]">
                                <img src="/src/assets/images/visa.svg" alt="" />
                                <img src="/src/assets/images/mastercard.svg" alt="" />
                                <img src="/src/assets/images/americanexpress.svg" alt="" />
                                <img src="/src/assets/images/paypal.svg" alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-[36px] col-span-2 text-[#E6E6E6]">
                            <div className="text-[16px] font-normal leading-[21.86px] tracking-[0%]">Stay connected with us:</div>
                            <div className="flex items-center gap-[36px]">
                                <div className="h-[36px] w-[36px]"><img src="/src/assets/images/pinterest.svg" alt="" /></div>
                                <div className="h-[36px] w-[36px]"><img src="/src/assets/images/instagram.svg" alt="" /></div>
                                <div className="h-[36px] w-[36px]"><img src="/src/assets/images/x.svg" alt="" /></div>
                                <div className="h-[36px] w-[36px]"><img src="/src/assets/images/facebook.svg" alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center text-[14px] font-normal leading-[19.12px] tracking-[0%] text-[#E6E6E6]">© 2024 Drest. All Rights Reserved</div>
                </div>
            </div>
        </>
  )
}

export default Home