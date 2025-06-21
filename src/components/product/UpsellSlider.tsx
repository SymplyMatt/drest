import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import {ReactNode, useRef, useState } from "react";
import { Product } from "../../utils/utils";
import UpsellSliderProduct from "./UpsellSliderProduct";
interface CategoriesAndProductsProps {
    products?: Product[];
    showTitle?: boolean;
    title?: string;
    titleComponent?: ReactNode;
}

const UpsellSlider: React.FC<CategoriesAndProductsProps> = ({ products=[], showTitle = true, title= 'You may also like', titleComponent=<></> }) => {
    const swiperRef = useRef<SwiperClass | null>(null);
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
        const totalSlides = products.length; 
        return (
            <div className="w-full tmd:w-fit flex items-center justify-center gap-[24px] tmd:mt-[24px] p-[20px] tmd:p-[0px] mx-auto">
                <img src="/images/prev_arrivals.svg" className="cursor-pointer" onClick={handlePrevClick} />
                <div className="w-full flex items-center justify-center">
                    {[...Array(totalSlides)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => swiperRef.current?.slideTo(index)}
                            className={`transition-all duration-300 ${
                                activeIndex === index 
                                    ? "bg-[#141511] w-full min-w-[20px] max-w-[80px] h-[4px] tmd:w-[80px]" 
                                    : "bg-[#F3F3F3] w-full min-w-[20px] max-w-[80px] h-[4px] tmd:w-[80px]"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
                <img src="/images/next_arrivals.svg"  className="cursor-pointer" onClick={handleNextClick}/>
            </div>
        );
    };

    if (products?.length === 0) {
        return (
            <></>
        );
    }
    return (
        <>
            <div className="w-full flex flex-col items-center gap-[20px] upsell p-[20px] tmd:p-[0px]">
                {titleComponent}
                {showTitle && <div className="w-full flex flex-col gap-[20px] justify-center px-[50px]">
                    <div className="w-full flex items-center justify-between h-[48px]">
                        <div className="flex items-center gap-[32px]">
                            <div className="text-[48px] font-medium leading-[32.78px] tracking-[0%]">{title}</div>
                        </div>
                        <div className="flex items-center gap-[16px]">
                            <div className="h-[48px] bg-white border border-[#D6D6D5] px-[36px] py-[12px] cursor-pointer flex items-center justify-center font-normal leading-[24px] tracking-[0%] transition-transform duration-200 hover:scale-[0.9] gap-[8px]">
                                <img src="/images/arrow_left.svg" className="cursor-pointer"/>PREVIOUS
                            </div>
                            <div className="h-[48px] bg-white border border-[#D6D6D5] px-[36px] py-[12px] cursor-pointer flex items-center justify-center font-normal leading-[24px] tracking-[0%] transition-transform duration-200 hover:scale-[0.9] gap-[8px]">
                                NEXT <img src="/images/arrow_right.svg" className="cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                </div>}
                <Swiper
                    className="w-full"
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    speed={1000}
                    modules={[Autoplay]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    breakpoints={{
                        0: {
                          slidesPerView: 1.2,
                          spaceBetween: 8
                        },
                        1000: {
                            slidesPerView: 4,
                            spaceBetween: 0
                        },
                    }}
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <UpsellSliderProduct product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {renderCustomPagination()}
        </>
    );
};

export default UpsellSlider;
