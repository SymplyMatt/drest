import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
interface ComponentProp{
    handleClick?: (category: string) => void;
}
const RoundCategoriesSlider: React.FC<ComponentProp> = ({ handleClick }) => {
    const navigate = useNavigate();
    const categories: string[][] = [
        ["Shoes", "SHOP NOW", "Tops", "Hand Bags", "Tops", "Shoes", "Bottoms", "Jackets & coats"], 
        ["Shoes", "SHOP NOW", "Tops", "Hand Bags", "Tops", "Shoes", "Bottoms", "Jackets & coats"], 
        ["Shoes", "SHOP NOW", "Tops", "Hand Bags", "Tops", "Shoes", "Bottoms", "Jackets & coats"]
    ];
    const swiperRef = useRef<SwiperClass | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const renderCustomPagination = () => {
        const totalSlides = categories.length; 
        return (
            <div className="w-full tmd:w-fit flex items-center justify-center gap-[24px] my-[24px] px-[20px]">
                <div className="w-full flex items-center justify-center">
                    {[...Array(totalSlides)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => swiperRef.current?.slideTo(index)}
                            className={`transition-all duration-300 ${
                                activeIndex === index 
                                    ? "bg-[#141511] w-full max-w-[60px] h-[4px] tmd:w-[60px]" 
                                    : "bg-[#F3F3F3] w-full max-w-[60px] h-[4px] tmd:w-[60px]"
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
                className="flex items-center justify-between w-full mt-[24px] tmd:mt-[0px]"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index} className="h-full flex flex-col justify-center !w-auto flex-row slide-in-slide">
                        <>
                            <div className="flex grid-cols-4 items-center tmd:hidden">
                                {category.slice(0,4).map((category, index) =>(
                                    <div className="w-[25%] relative h-full flex justify-center flex-col items-center gap-[8px] cursor-pointer" key={index}>
                                        <img
                                            src={`/images/productimage${(index % 6) + 1}.jpeg`}
                                            className="object-cover h-[64px] w-[64px] tmd:w-[100px] tmd:h-[100px] rounded-full"
                                            alt="Product"
                                        />
                                        <div className="w-full flex text-center items-center whitespace-nowrap justify-center h-[36px] bg-white px-[20px] font-semibold cursor-pointer" onClick={() => {handleClick ? handleClick(category) : navigate('/product/productId')}}>
                                            {category}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex grid-cols-4 items-center tmd:hidden">
                                {category.slice(4).map((category, index) =>(
                                    <div className="w-[25%] relative h-full flex justify-center flex-col items-center gap-[8px] cursor-pointer" key={index}>
                                        <img
                                            src={`/images/productimage${(index % 6) + 1}.jpeg`}
                                            className="object-cover h-[64px] w-[64px] tmd:w-[100px] tmd:h-[100px] rounded-full"
                                            alt="Product"
                                        />
                                        <div className="w-full flex text-center items-center whitespace-nowrap justify-center h-[36px] bg-white px-[20px] font-semibold cursor-pointer" onClick={() => {handleClick ? handleClick(category) : navigate('/product/productId')}}>
                                            {category}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                        <div className="tmd:flex grid-cols-4 items-center hidden gap-[8px]">
                            {category.map((category, index) =>(
                                <div className="relative h-full flex justify-center flex-col items-center gap-[8px] cursor-pointer" key={index}>
                                    <img
                                        src={`/images/productimage${(index % 6) + 1}.jpeg`}
                                        className="object-cover h-[64px] w-[64px] tmd:w-[100px] tmd:h-[100px] rounded-full"
                                        alt="Product"
                                    />
                                    <div className="w-full flex text-center items-center whitespace-nowrap justify-center h-[36px] bg-white px-[20px] font-semibold cursor-pointer" onClick={() => {handleClick ? handleClick(category) : navigate('/product/productId')}}>
                                        {category}
                                    </div>
                                </div>
                            ))}
                            </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {renderCustomPagination()}
        </div>
    );
}

export default RoundCategoriesSlider;
