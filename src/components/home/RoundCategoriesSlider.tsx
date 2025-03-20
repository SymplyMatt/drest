import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const RoundCategoriesSlider = () => {
    const categories: string[][] = [
        ["Shoes", "SHOP NOW", "Tops", "Hand Bags", "Tops", "Shoes", "Bottoms", "Jackets & coats"], 
        ["Shoes", "SHOP NOW", "Tops", "Hand Bags", "Tops", "Shoes", "Bottoms", "Jackets & coats"], 
        ["Shoes", "SHOP NOW", "Tops", "Hand Bags", "Tops", "Shoes", "Bottoms", "Jackets & coats"]
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
                            <div className="relative w-full h-full flex justify-center flex-col items-center gap-[8px] cursor-pointer" key={index}>
                                <img
                                    src={`/images/productimage${(index % 6) + 1}.jpeg`}
                                    className="object-cover w-[100px] h-[100px] rounded-full"
                                    alt="Product"
                                />
                                <div className="w-full flex text-center items-center whitespace-nowrap justify-center h-[36px] bg-white px-[20px] font-semibold cursor-pointer" onClick={() => navigate('/product/productId')}>
                                    {category}
                                </div>
                            </div>
                        ))}
                    </SwiperSlide>
                ))}
            </Swiper>
            {renderCustomPagination()}
        </div>
    );
}

export default RoundCategoriesSlider;
