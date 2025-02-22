import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
const GridSlider = () => {
    return (
        <div className="px-[60px] w-full slider_arrivals">
            <Swiper
                spaceBetween={14}
                slidesPerView={6}
                loop={true}
                navigation={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                modules={[Autoplay, Navigation]}
                speed={1000}
                className="flex items-center justify-between"
            >
                {[...Array(10)].map((_, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <div className="relative w-full h-full flex flex-col justify-center gap-[14px]">
                            <img
                                src={`/src/assets/images/newarrivals${(index % 4) + 1}.png`}
                                className="object-cover h-[320px] w-[220px]"
                                alt="Product"
                            />
                            <p className="text-black foont-medium text-[14px]">Athletics French Terry Crew</p>
                            <p className="text-[18px] text-[#8F0024] font-semibold price">109.40 TND</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default GridSlider