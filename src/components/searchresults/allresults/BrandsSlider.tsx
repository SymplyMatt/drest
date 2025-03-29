import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const BrandsSlider = () => {
    const categories: string[][] = [
        ["/images/mango.svg", "/images/addidas.svg", "/images/burberry.svg", "/images/chanel.svg", "/images/oysho.svg", "/images/zara.svg", "/images/patagonia.svg"],
        ["/images/mango.svg", "/images/addidas.svg", "/images/burberry.svg", "/images/chanel.svg", "/images/oysho.svg", "/images/zara.svg", "/images/patagonia.svg"],
        ["/images/mango.svg", "/images/addidas.svg", "/images/burberry.svg", "/images/chanel.svg", "/images/oysho.svg", "/images/zara.svg", "/images/patagonia.svg"]
    ];
    const navigate = useNavigate();
    const swiperRef = useRef<SwiperClass | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const renderCustomPagination = () => {
        const totalSlides = categories.length; 
        return (
            <div className="flex items-center justify-center gap-[24px] mt-[24px]">
                <div className="flex items-center justify-center">
                    {[...Array(totalSlides)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => swiperRef.current?.slideTo(index)}
                            className={`transition-all duration-300 ${
                                activeIndex === index 
                                    ? "bg-[#141511] w-[60px] h-[4px]" 
                                    : "bg-[#F3F3F3] w-[60px] h-[4px]"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        );
    };
    return (
        <div className="w-full slider_featured flex flex-col items-center justify-center">
            <Swiper
                spaceBetween={12}
                slidesPerView="auto"
                loop={true}
                navigation={true}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                modules={[Autoplay, Navigation]}
                speed={5000}
                className="flex items-center justify-between w-full"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index} className="h-full flex justify-center !w-auto flex-row slide-in-slide">
                        {category.map((category, index) =>(
                            <div className="h-[110px] w-[185px] flex items-center justify-center bg-[#141511] cursor-pointer rounded-[24px]" key={index}>
                                <img src={category}/>
                            </div>
                        ))}
                    </SwiperSlide>
                ))}
            </Swiper>
            {renderCustomPagination()}
        </div>
    );
}

export default BrandsSlider;
