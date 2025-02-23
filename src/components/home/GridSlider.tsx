import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
const GridSlider = () => {
    const swiperRef = useRef<SwiperClass | null>(null);
    const [slidesPerView, setSlidesPerView] = useState(4);
    return (
        <div className="w-full slider_arrivals" onMouseEnter={() => {
            swiperRef.current?.autoplay?.stop();
            setSlidesPerView(4);
        }}
        onMouseLeave={() => {
            swiperRef.current?.autoplay?.start();
            setSlidesPerView(4);
        }}>
            <Swiper
                spaceBetween={0}
                slidesPerView={slidesPerView}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                modules={[Autoplay]}
                speed={1000}
                className="flex items-center justify-between"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {[...Array(5)].map((_, index) => (
                    <SwiperSlide key={index} className="flex justify-center bg-[#F3F3F3] border border-[#E6E6E6] transition-all duration-1000 hover:h-[500px] hover:w-[375px] hover:z-10 relative px-[20px] py-[60px] hover:px-[10px] hover:py-[20px] hover:scale-[1.05] group">
                        <div className="w-full h-full flex flex-col justify-center transition-all duration-1000 hover:z-10 relative bg-white">
                            <div className="w-full flex items-center justify-center new_arrivals_img relative">
                                <img src={`/src/assets/images/arrivals${index + 1}.png`} className="w-[80%] h-[80%] object-cover"/>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] text-[#141511] bg-white py-[8px] px-[24px] flex justify-center items-center text-[16px] font-medium leading-[24.8px] tracking-[0%] cursor-pointer gap-[8px]  opacity-0 scale-0 transition-all duration-50 group-hover:opacity-100 group-hover:scale-100">View all <img src="/src/assets/images/arrowdirection.svg" /></div>
                            </div>
                            <div className="w-full h-[60px] border-t border-[#D6D6D5] flex items-center justify-between">
                                <div className="w-full flex items-center justify-center text-[18px] font-medium leading-[27px] tracking-[0%]">Sweat Shirts</div>
                                <div className="h-[20.5px] bg-[#D6D6D5] w-[1px]"></div>
                                <div className="w-full flex items-center justify-center text-[18px] font-medium leading-[27px] tracking-[0%]">840 Products</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default GridSlider