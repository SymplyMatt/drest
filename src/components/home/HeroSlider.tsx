import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

const HeroSlider = () => {
    return (
        <div className="w-full flex justify-center slider_hero">
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="w-full slider_home bg-black"
                speed={1800}
            >
                <SwiperSlide className="bg-red-900">
                    <div className="w-full flex justify-center bg-no-repeat bg-cover px-[80px] gap-[32px] flex-col text-white sliderone">
                        <div className="flex flex-col justify-center gap-[12px]">
                            <div className="text-white text-[40px] leading-[50px] header_slider">
                                Fall in Love with Fashion <br /> This Valentine's Day!
                            </div>
                            <div className="text-[14px] max-w-[370px] text-[#E6E6E6]">
                                Celebrate love in style! Shop our exclusive Valentine's Day collection and enjoy up to 50% off on romantic dresses, chic accessories, and more.
                            </div>
                        </div>
                        <div className="bg-white h-[48px] w-fit px-[36px] text-black flex items-center justify-center tracking-[2%] text-[16px] font-medium cursor-pointer transition-transform duration-200 hover:scale-90 transition-transform duration-200 hover:scale-[0.9]">
                            SHOP NOW
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full flex justify-center bg-no-repeat bg-cover px-[80px] gap-[32px] flex-col text-white slidertwo">
                        <div className="flex flex-col justify-center gap-[12px]">
                            <div className="text-white text-[40px] leading-[50px] header_slider">
                                Fresh Styles, Just for You!
                            </div>
                            <div className="text-[14px] max-w-[370px] text-[#E6E6E6]">
                                Our new arrivals are here to elevate your wardrobe. Discover the latest trends and be the first to own the season's hottest looks!
                            </div>
                        </div>
                        <div className="bg-black text-[#E6E6E6] h-[48px] w-fit px-[36px] flex items-center justify-center tracking-[2%] text-[16px] font-medium cursor-pointer transition-transform duration-200 hover:scale-90">
                            SHOP NOW
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HeroSlider