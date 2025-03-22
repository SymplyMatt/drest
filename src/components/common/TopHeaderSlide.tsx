import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef, useState } from "react";

const images = [
    "/images/topslider1.png",
    "/images/topslider2.png",
    "/images/topslider3.png"
];

const TopHeaderSlide = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperClass | null>(null);
    const renderCustomPagination = () => {
        const totalSlides = images.length; 
        return (
            <div className="flex items-center justify-center">
                <div className="w-full flex items-center justify-center">
                    {[...Array(totalSlides)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => swiperRef.current?.slideTo(index)}
                        className={`transition-all duration-300 h-[4px] flex-grow ${
                        activeIndex === index ? "bg-[#141511]" : "bg-[#F3F3F3]"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                    ))}
                </div>
            </div>
        );
    };
    return (
        <div className="pl-[24px] py-[24px] w-[360px] h-[380px] flex flex-col justify-between gap-[20px] ">
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                speed={1000}
                modules={[Autoplay]}
                className="w-full h-full h-[310px]"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index} className="h-[310px]">
                        <div className="h-full w-full bg-[#F3F3F3]">
                            <img src={src} className="h-full object-cover" alt="Slide" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {renderCustomPagination()}
        </div>
    );
};

export default TopHeaderSlide;
