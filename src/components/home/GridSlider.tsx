import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { useRef, useState } from "react";

const GridSlider = () => {
    const swiperRef = useRef<SwiperClass | null>(null);
    const [slidesPerView, setSlidesPerView] = useState(4);
    const [activeIndex, setActiveIndex] = useState(0);

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
        const totalSlides = 5; 
        return (
            <div className="flex items-center justify-center mt-6 gap-[24px]">
                <img src="/images/prev_arrivals.svg" className="cursor-pointer" onClick={handlePrevClick}   />
                <div className="flex items-center justify-center">
                    {[...Array(totalSlides)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => swiperRef.current?.slideTo(index)}
                            className={`transition-all duration-300 ${
                                activeIndex === index 
                                    ? "bg-[#141511] w-[80px] h-[4px]" 
                                    : "bg-[#F3F3F3] w-[80px] h-[4px]"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
                <img src="/images/next_arrivals.svg"  className="cursor-pointer" onClick={handleNextClick}/>
            </div>
        );
    };

    return (
        <>
            <div 
                className="w-full slider_arrivals" 
                onMouseEnter={() => {
                    swiperRef.current?.autoplay?.stop();
                    setSlidesPerView(4);
                }}
                onMouseLeave={() => {
                    swiperRef.current?.autoplay?.start();
                    setSlidesPerView(4);
                }}
            >
                <Swiper
                    spaceBetween={0}
                    slidesPerView={slidesPerView}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    modules={[Autoplay, Pagination]}
                    speed={1000}
                    className="flex items-center justify-between"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {[...Array(5)].map((_, index) => (
                        <SwiperSlide 
                            key={index} 
                            className="flex justify-center bg-[#F3F3F3] border border-[#E6E6E6] transition-all duration-1000 hover:h-[500px] hover:w-[375px] hover:z-10 relative px-[20px] py-[60px] hover:px-[10px] hover:py-[20px] hover:scale-[1.05] group"
                        >
                            <div className="w-full h-full flex flex-col justify-center transition-all duration-1000 hover:z-10 relative bg-white">
                                <div className="w-full flex items-center justify-center new_arrivals_img relative">
                                    <img 
                                        src={`/images/arrivals${index + 1}.png`} 
                                        className="w-[80%] h-[80%] object-cover"
                                        alt={`Arrival ${index + 1}`}
                                    />
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] text-[#141511] bg-white py-[8px] px-[24px] flex justify-center items-center text-[16px] font-medium leading-[24.8px] tracking-[0%] cursor-pointer gap-[8px] opacity-0 scale-0 transition-all duration-50 group-hover:opacity-100 group-hover:scale-100">
                                        View all <img src="/images/arrowdirection.svg" alt="Arrow" />
                                    </div>
                                </div>
                                <div className="w-full h-[60px] border-t border-[#D6D6D5] flex items-center justify-between">
                                    <div className="w-full flex items-center justify-center text-[18px] font-medium leading-[27px] tracking-[0%]">
                                        Sweat Shirts
                                    </div>
                                    <div className="h-[20.5px] bg-[#D6D6D5] w-[1px]" />
                                    <div className="w-full flex items-center justify-center text-[18px] font-medium leading-[27px] tracking-[0%]">
                                        840 Products
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {renderCustomPagination()}
        </>
    );
};

export default GridSlider;