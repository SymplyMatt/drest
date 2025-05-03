import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const FeaturedBrands = () => {
    return (
        <div className="flex flex-col items-center gap-[36px] w-full justify-center mb-[40px]">
            <div className="w-full flex flex-col items-center justify-center gap-[4px] py-[12px] tmd:px-[0px]">
                <div className="text-[48px] font-medium leading-[62.4px] tracking-[-2%]">Featured Brands</div>
                <div className="text-[#8F0024] text-[18px] font-medium leading-[24.59px] tracking-[-2%]">Brands you love</div>
            </div>
            <div className="w-full featured_brands">
                <Swiper
                    spaceBetween={14}
                    loop={true}
                    navigation={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Autoplay, Navigation]}
                    speed={2000}
                    className="flex items-center justify-between"
                    breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        1000: {
                          slidesPerView: 4.5
                        },
                    }}
                >
                    {[...Array(100)].map((_, index) => (
                        <SwiperSlide key={index} className="w-[230px] h-[290px] tmd:w-fit tmd:h-[384px] flex justify-center">
                            <div className="relative w-full h-full flex justify-center">
                                <img
                                    src={`/images/brands${(index % 5) + 1}.png`}
                                    className="object-cover w-full h-full"
                                    alt="Product"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="h-[48px] border-[#000000] flex items-center justify-center py-[12px] px-[36px] border text-[18px] font-semibold cursor-pointer leading-[24px] tracking-[0%] transition-transform duration-200 hover:scale-[0.9]">SHOP ALL BRANDS</div>
        </div>
    )
}

export default FeaturedBrands