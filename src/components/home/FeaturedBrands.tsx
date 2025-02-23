import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const FeaturedBrands = () => {
    return (
        <div className="flex flex-col items-center gap-[24px] w-full justify-center">
            <div className="w-full flex flex-col items-center justify-center gap-[4px]">
                <div className="text-[48px] font-medium leading-[62.4px] tracking-[-2%]">Featured Brands</div>
                <div className="text-[#8F0024] text-[18px] font-medium leading-[24.59px] tracking-[-2%]">Brands you love</div>
            </div>
            <div className="w-full featured_brands mb-[40px]">
                <Swiper
                    spaceBetween={14}
                    slidesPerView={4.5}
                    loop={true}
                    navigation={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Autoplay, Navigation]}
                    speed={2000}
                    className="flex items-center justify-between"
                >
                    {[...Array(10)].map((_, index) => (
                        <SwiperSlide key={index} className="h-[384px] flex justify-center">
                            <div className="relative w-full h-full flex justify-center">
                                <img
                                    src={`/src/assets/images/brands${(index % 5) + 1}.png`}
                                    className="object-cover w-full h-full"
                                    alt="Product"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default FeaturedBrands