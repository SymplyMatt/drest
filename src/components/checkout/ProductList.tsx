import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
const ProductList = () => {
    const swiperRef = useRef<SwiperClass | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();
    const renderCustomPagination = () => {
        const totalSlides = 6; 
        return (
            <div className="h-[660px] flex flex-col items-center justify-center mb-6 gap-[24px]">
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
    <div className="w-full flex flex-col gap-4 product-list-swiper p-[24px]">
        <div className="w-full flex items-center justify-between">
            <div className="text-[#141511] text-[20px] font-medium">Product list</div>
            <div className="cursor-pointer text-[#676764] text-[14px] underline leading-[150%]">EDIT PRODUCTS</div>
        </div>
        <div className="w-full flex flex-col items-center justify-between">
            <div className="w-full h-[660px] flex justify-between w-full overflow-hidden">
                <Swiper
                    direction="vertical"
                    slidesPerView={5.2}
                    spaceBetween={20}
                    loop={true} 
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    speed={1000}
                    className="w-full h-full overflow-hidden"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    modules={[Autoplay]}
                >
                    {[1,2,3,4,5,6].map((item, index) => (
                        <SwiperSlide className="w-full h-[111px]" key={index}>
                            <div className="w-full flex items-center gap-3 h-full">
                                <img src={`/images/payment-image${item}.svg`} alt={`Product ${item}`} className="h-full object-cover" />
                                <div className="w-full flex flex-col h-full justify-between py-1">
                                    <div className="text-[#141511] text-lg font-medium leading-[150%]">Ocean breeze varsity jacket</div>
                                    <div className="text-[#141511] text-xl font-medium price">120.00 TND</div>
                                    <div className="w-full grid grid-cols-10 items-center justify-between gap-2">
                                        <div className="col-span-6 text-[#4F4F4D] text-base leading-[150%]">Color: <span>Solid Blue</span></div>
                                        <div className="col-span-4 text-[#4F4F4D] text-base leading-[150%]">Size: <span>XL</span></div>
                                    </div>
                                    <div className="w-full grid grid-cols-10 items-center justify-between gap-2">
                                        <div className="col-span-6 text-[#4F4F4D] text-base leading-[150%]">Category: <span>{("varsity jacket").substring(0,13)}{("varsity jacket").length > 13 ? '...' : ''}</span></div>
                                        <div className="col-span-4 text-[#4F4F4D] text-base leading-[150%]">Quantity: <span>1 Pcs</span></div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="h-full">{renderCustomPagination()}</div>
            </div>
            <div className="flex w-full items-center justify-center bg-[#141511] cursor-pointer h-[48px] text-white mt-[12px]" 
                    onClick={()=>{
                        navigate(`/checkout/confirm`);
                    }}>
                    CONTINUE
                </div>
        </div>
    </div>
  )
}

export default ProductList