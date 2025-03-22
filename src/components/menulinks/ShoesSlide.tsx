import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef, useState } from "react";

const images = [
    "/images/topslider1.png",
    "/images/topslider2.png",
    "/images/topslider3.png"
];

const ShoesSlide = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperClass | null>(null);
    const handlePrevClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };
    const handleNextClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };
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
        <div className="pl-[24px] py-[24px] flex flex-col justify-between gap-[20px]">
            <div className="uppercase font-bold text-[#141511] flex items-center justify-between w-full">
                Featured items
                <div className="flex items-center gap-[12px]">
                    <img src="/images/prevsm.svg" className="cursor-pointer" onClick={handlePrevClick}/>
                    <img src="/images/nextsm.svg" className="cursor-pointer"onClick={handleNextClick}/>
                </div>
            </div>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                speed={1000}
                modules={[Autoplay]}
                className="w-full h-full"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {images.map((_, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col gap-[18px]">
                            <div className="flex item-center gap-[12px]">
                                <img src={`/images/prodsug3.svg`}/>
                                <div className="flex flex-col gap-[4px]">
                                    <div className="text-[14px] font-semibold">Mango</div>
                                    <div className="text-[#141511]">Charcoal denim trucker jacket</div>
                                    <div className="font-semibold text-[#141511] text-[18px] price">120.50 TND</div>
                                </div>
                            </div>
                            <div className="flex item-center gap-[12px]">
                                <img src={`/images/prodsug5.svg`}/>
                                <div className="flex flex-col gap-[4px]">
                                    <div className="text-[14px] font-semibold">Mango</div>
                                    <div className="text-[#141511]">Charcoal denim trucker jacket</div>
                                    <div className="font-semibold text-[#141511] text-[18px] price">120.50 TND</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {renderCustomPagination()}
        </div>
    );
};

export default ShoesSlide;
