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
                {[...Array(100)].map((_, index) => (
                    <SwiperSlide key={index} className="flex justify-center bg-[#F3F3F3] border border-[#E6E6E6] transition-all duration-1000 hover:h-[500px] hover:w-[375px] hover:z-10 relative px-[20px] py-[60px] hover:px-[10px] hover:py-[20px] hover:scale-[1.05]">
                        <div className="w-full h-full flex flex-col justify-center transition-all duration-1000 hover:z-10 relative bg-white">
                            <div className="w-full flex items-center justify-center new_arrivals_img">
                                <img src={`/src/assets/images/arrivals1.png`} className=""/>
                            </div>
                            <div className="w-full h-[60px] border-t border-[#D6D6D5] flex items-center justify-between">
                                <div className="w-full flex items-center justify-center">Sweat Shirts</div>
                                <div className="h-[20.5px] bg-[#D6D6D5] w-[1px]"></div>
                                <div className="w-full flex items-center justify-center">840 Products</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default GridSlider