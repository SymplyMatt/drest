import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
    "/images/topslider1.png",
    "/images/topslider2.png",
    "/images/topslider3.png"
];

const TopHeaderSlide = () => {
    return (
        <div className="pl-[24px] py-[24px] w-[360px] h-[380px]">
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                speed={1000}
                modules={[Autoplay]}
                className="w-full h-full"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="h-full w-full bg-[#F3F3F3]">
                            <img src={src} className="w-full h-full object-cover" alt="Slide" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TopHeaderSlide;
