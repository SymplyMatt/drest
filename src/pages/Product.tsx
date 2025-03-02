import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import UpsellSlider from "../components/product/UpsellSlider";
import Layout from "./Layout";
import { useRef, useState } from "react";
import { Autoplay } from "swiper/modules";

const Home = () => {
    const swiperRef = useRef<SwiperClass | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const renderCustomPagination = () => {
        const totalSlides = 6; 
        return (
            <div className="h-full flex flex-col items-center justify-center mb-6 gap-[24px]">
                <div className="h-full flex flex-col items-center justify-center">
                    {[...Array(totalSlides)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => swiperRef.current?.slideTo(index)}
                            className={`transition-all duration-300 ${
                                activeIndex === index 
                                    ? "bg-[#141511] w-[4px] h-full" 
                                    : "bg-[#F3F3F3] w-[4px] h-full"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        );
    };
    return (
        <Layout>
            <div className="w-full bg-[#F3F3F3] grid grid-cols-[17%_50%_33%] px-[50px] gap-[20px] items-center justify-center">
                <div className="flex items-center justify-center w-full">
                    <div className="flex items-center justify-center w-[195px] bg-white h-[512px] gap-[16px] p-[16px]">
                        <div className="h-full">{renderCustomPagination()}</div>
                        <Swiper
                            direction="vertical"
                            slidesPerView={3.2}
                            spaceBetween={0}
                            loop={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            speed={1000}
                            className="w-full h-full"
                            modules={[Autoplay]}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        >
                            <SwiperSlide>
                                <div className="w-full h-[150px] border border-[#D6D6D5] bg-[#F3F3F3] flex items-center justify-center cursor-pointer p-[10px]">
                                    <img src="/images/productimage1.png" className="h-full object-cover"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full h-[150px] border border-[#D6D6D5] bg-[#F3F3F3] flex items-center justify-center cursor-pointer p-[10px]">
                                    <img src="/images/productimage2.png" className="h-full object-cover"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full h-[150px] border border-[#D6D6D5] bg-[#F3F3F3] flex items-center justify-center cursor-pointer p-[10px]">
                                    <img src="/images/productimage3.png" className="h-full object-cover"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full h-[150px] border border-[#D6D6D5] bg-[#F3F3F3] flex items-center justify-center cursor-pointer p-[10px]">
                                    <img src="/images/productimage1.png" className="h-full object-cover"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full h-[150px] border border-[#D6D6D5] bg-[#F3F3F3] flex items-center justify-center cursor-pointer p-[10px]">
                                    <img src="/images/productimage2.png" className="h-full object-cover"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full h-[150px] border border-[#D6D6D5] bg-[#F3F3F3] flex items-center justify-center cursor-pointer p-[10px]">
                                    <img src="/images/productimage3.png" className="h-full object-cover"/>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <img src="/images/productimage1.png" className="h-full"/>
                </div>
                <div className="flex items-center justify-center"></div>
            </div>
            <UpsellSlider/>
        </Layout>
    );
};

export default Home;
