import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState } from "react";

const ProductHero = () => {
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
        <div className="w-full bg-[#F3F3F3] grid grid-cols-[17%_50%_33%] px-[50px] gap-[20px] items-center justify-center">
            <div className="flex items-center justify-center w-full">
                <div className="flex items-center justify-center w-[195px] bg-white h-[512px] gap-[16px] p-[16px]">
                    <div className="h-full">{renderCustomPagination()}</div>
                    <Swiper
                        direction="vertical"
                        slidesPerView={3.2}
                        spaceBetween={0}
                        speed={1000}
                        className="w-full h-full"
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
            <div className="flex items-center justify-center p-[24px]">
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="h-[48px] bg-[#8F0024] w-full flex items-center justify-between text-white px-[24px] py-[12px]">
                        <div className="font-normal text-[16px] leading-[24px] tracking-[0%]">SPECIAL DISCOUNT</div>
                        <div className="font-semibold text-[16px] leading-[24px] tracking-[-4%]">18% OFF</div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center bg-white">
                        <div className="w-full flex flex-col items-center py-[16px] px-[24px]">
                            <div className="w-full flex items-center justify-between text-white">
                                <div className="text-[#141511] ">Arman classic varsity jacket</div>
                                <div className=""><img src="/images/heart.svg" className="cursor-pointer" /></div>
                            </div>
                            <div className="font-semibold text-[24px] leading-[24px] tracking-[-4%] w-full flex items-center gap-[8px] price">180.00 TND <span className="font-semibold text-[#8F0024] text-[20px] leading-[26px] tracking-[0%] line-through">220 TND</span></div>
                        </div>
                        <div className="w-full grid grid-cols-2 items-center border-t border-b border-[#D6D6D5]">
                            <div className="px-[24px] col-span-1 flex flex-col justify-between text-white gap-[4px] border-r border-[#D6D6D5] py-[16px]">
                                <div className="text-[#676764] font-normal text-[16px] leading-[24px] tracking-[0%]">Category:</div>
                                <div className="text-[#141511] font-medium text-[18px] leading-[27px] tracking-[0%]">Men's Jacket</div>
                            </div>
                            <div className="px-[24px] col-span-1 flex flex-col justify-between text-white gap-[4px] py-[16px]">
                                <div className="text-[#141511] font-semibold text-[18px] leading-[27px] tracking-[0%]">4.5 <span className="font-normal">(103 Reviews)</span> </div>
                                <div className="flex items-center gap-[4px]">
                                    <img src="/images/staractive.svg" />
                                    <img src="/images/staractive.svg" />
                                    <img src="/images/staractive.svg" />
                                    <img src="/images/staractive.svg" />
                                    <img src="/images/starinactive.svg" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex items-center border-b border-[#D6D6D5]">
                            <div className="px-[24px] w-full flex flex-col justify-between text-white gap-[4px] border-r border-[#D6D6D5] py-[16px]">
                                <div className="text-[#000000] font-semibold text-[18px] leading-[27px] tracking-[0%]">Color: <span className="font-normal">Green</span></div>
                                <div className="flex items-center gap-[9px]">
                                    <div className="flex items-center justify-center h-[36px] w-[36px] rounded-50 border border-[#6B6B6B]">
                                        <div className="h-[24px] w-[24px] rounded-50 bg-[#34301D] cursor-pointer"></div>
                                    </div>
                                    <div className="h-[24px] w-[24px] rounded-50 bg-[#1B376F] cursor-pointer"></div>
                                    <div className="h-[24px] w-[24px] rounded-50 bg-[#401B6F] cursor-pointer"></div>
                                    <div className="h-[24px] w-[24px] rounded-50 bg-[#6F371B] cursor-pointer"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex items-center border-b border-[#D6D6D5]">
                            <div className="px-[24px] w-full flex flex-col justify-between text-white gap-[4px] border-r border-[#D6D6D5] py-[16px]">
                                <div className="flex w-full items-center justify-between">
                                    <div className="text-[#141511]">Select size</div>
                                    <div className="font-medium text-[14px] leading-[21px] tracking-[0%] text-[#676764] underline cursor-pointer">SIZE CHART</div>
                                </div>
                                <div className="w-full grid grid-cols-3 gap-[12px] text-[#141511]">
                                    <div className="col-span-1 h-40 border border-[#D6D6D5] flex items-center justify-center cursor-pointer font-medium text-[16px] leading-[21px] tracking-[-4%] hover:border-[#141511]">XS</div>
                                    <div className="col-span-1 h-40 border border-[#D6D6D5] flex items-center justify-center cursor-pointer font-medium text-[16px] leading-[21px] tracking-[-4%] hover:border-[#141511]">S</div>
                                    <div className="col-span-1 h-40 border border-[#D6D6D5] flex items-center justify-center cursor-pointer font-medium text-[16px] leading-[21px] tracking-[-4%] hover:border-[#141511] bg-[#F3F3F3]">M</div>
                                    <div className="col-span-1 h-40 border border-[#D6D6D5] flex items-center justify-center cursor-pointer font-medium text-[16px] leading-[21px] tracking-[-4%] hover:border-[#141511]">L</div>
                                    <div className="col-span-1 h-40 border border-[#D6D6D5] flex items-center justify-center cursor-pointer font-medium text-[16px] leading-[21px] tracking-[-4%] hover:border-[#141511] bg-[#F3F3F3]">XL</div>
                                    <div className="col-span-1 h-40 border border-[#D6D6D5] flex items-center justify-center cursor-pointer font-medium text-[16px] leading-[21px] tracking-[-4%] hover:border-[#141511]">XXL</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center px-[24px] py-[16px] gap-[12px]">
                            <div className="gap-[8px] w-full h-[48px] bg-[#141511] text-white flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-[0.95]"><img src="/images/plus.svg"/> ADD TO CART</div>
                            <div className="gap-[8px] w-full h-[48px] bg-[#fff] text-[#60D669] flex items-center justify-center cursor-pointer border border-[#60D669] transition-transform duration-200 hover:scale-[0.95]"><img src="/images/plus.svg"/><img src="/images/whatsapp.svg"/> ORDER ON WHATSAPP</div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center bg-white mt-[20px]">
                        <div className="flex flex-col justify-center gap-[8px] border-b border-[#D6D6D5] py-[24px] px-[24px]">
                            <div className="text-[#141511] font-semibold text-[20px] leading-[26px] tracking-[0%]">PRODUCT REVIEW</div>
                            <div className="text-[#4F4F4D] font-normal text-[16px] leading-[24px] tracking-[0%]">See what other customers think about this product.</div>
                        </div>
                        <div className="w-full p-[24px] flex items-center justify-center">
                            <div className="flex justify-center items-center gap-[8px] w-full h-[48px] bg-white text-[#141511] flex items-center justify-center cursor-pointer border border-[#D6D6D5] font-medium cursor-pointer transition-transform duration-200 hover:scale-[0.95]">SEE REVIEWS</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductHero