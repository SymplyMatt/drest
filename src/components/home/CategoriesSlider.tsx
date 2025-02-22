import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const CategoriesSlider = () => {
    const categories: string[] = ["Shoes", "Clothing", "Accessories", "Bags", "Beauty", "Home lifestyle", "Shoes", "Clothing", "Accessories", "Bags", "Beauty", "Home lifestyle"]
    return (
        <div className="px-[60px] w-full slider_featured mb-[24px]">
            <Swiper
                spaceBetween={14}
                slidesPerView={6}
                loop={true}
                navigation={true}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                modules={[Autoplay, Navigation]}
                speed={5000}
                className="flex items-center justify-between"
            >
                {[...Array(10)].map((_, index) => (
                    <SwiperSlide key={index} className="h-[290px] flex justify-center">
                        <div className="relative w-full h-full flex justify-center">
                            <img
                                src={`/src/assets/images/productimage${(index % 6) + 1}.jpeg`}
                                className="object-cover w-full h-full"
                                alt="Product"
                            />
                            <div className="absolute bottom-[10px] flex items-center justify-center h-[36px] bg-white px-[20px] font-semibold cursor-pointer">
                                {categories[index]}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CategoriesSlider