import { useNavigate } from "react-router-dom";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { act, ReactNode, useEffect, useRef, useState } from "react";
interface CategoriesAndProductsProps {
    products?: any[];
    showTitle?: boolean;
    title?: string;
    titleComponent?: ReactNode;
}

const UpsellSlider: React.FC<CategoriesAndProductsProps> = ({ products = [1, 2, 3, 4, 5, 6, 7, 8], showTitle = true, title= 'You may also like', titleComponent=<></> }) => {
    const shuffledIndexes = [...products.keys()].sort(() => Math.random() - 0.5);
    const navigate = useNavigate();
    const allImages = ['/images/recommended1.png','/images/recommended2.png','/images/recommended3.png','/images/recommended4.png','/images/recommended5.png','/images/recommended6.png','/images/recommended7.png','/images/recommended8.png']
    const swiperRef = useRef<SwiperClass | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
    const [activeImage, setActiveImage] = useState<string>('/images/recommended1.png');
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        if (isHovered) {
            const intervalId = setInterval(() => {
                const nextIndex:number = (allImages.indexOf(activeImage as string) < allImages.length - 1) ? allImages.indexOf(activeImage) + 1 : 0;
                setActiveImage(allImages[nextIndex]);
            }, 1000);
    
            return () => clearInterval(intervalId);
        } else {
            setActiveImage('/images/recommended1.png');
        }
    }, [isHovered, allImages]);    
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
            <div className="flex items-center justify-center gap-[24px] mt-[24px]">
                <img src="/images/prev_arrivals.svg" className="cursor-pointer" onClick={handlePrevClick} />
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
            <div className="w-full flex flex-col items-center gap-[20px]">
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
                    slidesPerView={4}
                    className="w-full"
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    speed={1000}
                    modules={[Autoplay]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {shuffledIndexes.map((number,index) => {
                        const discount = Math.random() < 0.5 ? 0 : Math.floor(Math.random() * 41) + 10;
                        const price = Math.floor(Math.random() * 101) + 100;
                        const priceAfterDiscount = price - (price * discount) / 100;
                        return (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-center h-[480px] group cursor-pointer" 
                                    onMouseEnter={() =>{ 
                                        setHoveredIndex(index);
                                        setIsHovered(true);
                                    }} 
                                    onMouseLeave={() => {
                                        setHoveredIndex(null);
                                        setIsHovered(false);
                                    }}>
                                    <div className="w-full h-[400px] bg-[#F3F3F3] border border-[#E6E6E6] flex items-center justify-center relative">
                                        <img src={(isHovered && hoveredIndex === index) ? activeImage : `/images/recommended${number + 1}.png`} className="w-full h-full object-cover" />
                                        <img src="/images/heart.svg" className="cursor-pointer absolute top-[20px] right-[10px] transition-transform duration-200 hover:scale-[0.9]" />
                                        <div
                                            className={`absolute top-[20px] left-[10px] h-[28px] bg-[#8F0024] p-[10px] flex justify-center items-center text-white text-[14px] font-semibold leading-[21px] tracking-[-4%] gap-[8px] ${
                                                !discount && "hidden"
                                            }`}
                                        >
                                            <img src="/images/discountbadge.svg" /> {discount}% OFF
                                        </div>
                                        <img src="/images/rec_plus.svg" className="cursor-pointer absolute bottom-[20px] right-[10px]" />
                                        <div className="w-full h-[80px] border-t border-b border-[#D6D6D5] cursor-pointer absolute bottom-[0px] right-[0px] bg-white flex items-center justify-center p-[16px] opacity-0 translate-y-4 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                                            <div
                                                className="h-[48px] bg-[#141511] w-full flex items-center justify-center text-white gap-[8px] text-[16px] leading-[24px] tracking-[0%] font-medium transition-transform duration-200 hover:scale-[0.9]"
                                                onClick={() => navigate(`/product/${number}`)}
                                            >
                                                <img src="/images/eye_product.svg" /> Quick View
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-[4px] h-[80px] border-b border-l border-r border-[#E6E6E6] w-full">
                                        <div className="text-[18px] leading-[27px] tracking-[0%]">Ocean breeze varsity jacket</div>
                                        <div className="text-[18px] font-semibold leading-[26px] tracking-[-5%] price">
                                            {Math.round(priceAfterDiscount)} TND
                                            {discount ? (
                                                <span className="font-semibold text-[#8F0024] text-[16px] leading-[24px] tracking-[-4%] line-through">{price} TND</span>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            {renderCustomPagination()}
        </>
    );
};

export default UpsellSlider;
