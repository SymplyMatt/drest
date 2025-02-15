import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  return (
    <div className="flex flex-col w-full items-center gap-[24px]">
        <div className="w-full flex flex-col">
            <div className="w-full flex h-[42px] bg-headerBlack items-center justify-between text-textWhite px-[60px]">
                <div className="flex items-center gap-[8px] cursor-pointer">
                    <img src="/src/assets/images/france.svg"/> 
                    <div className="flex gap-[4px] items-center text-[14px]">
                        <span className="text-[14px] font-extrabold">FR</span> 
                        <span className="text-[#E6E6E6] opacity-[0.7]">|</span> 
                        <span>French</span> 
                        <img src="/src/assets/images/caretdownsm.svg"/>
                    </div>

                </div>
                <div className="flex justify-center items-center gap-[40px] text-[14px]">
                    <div className="cursor-pointer"><img src="/src/assets/images/arrowleft.svg"/></div>
                    <div className="font-semibold">We love love - Shop for all the Valentine's Day gifts in our LOVE SALE!!</div>
                    <div className="font-medium underline leading-[14px] cursor-pointer">SHOP NOW</div>
                    <div className="cursor-pointer"><img src="/src/assets/images/arrowright.svg"/></div>
                </div>
                <div className="text-[14px] flex items-center gap-[4px] cursor-pointer">Currency: <span className="text-[14px] font-extrabold">EUR</span> <img src="/src/assets/images/caretdownsm.svg"/></div>  
            </div>
            <div className="w-full h-[92px] flex border-b border-[#E6E6E6] px-[60px] justify-between items-center">
                <div className="cursor-pointer"><img src="/src/assets/images/logo.svg"/></div>
                <div className="flex items-center gap-[12px] uppercase">
                    <div className="font-semibold cursor-pointer flex items-center opacity-[0.90]">Women</div>
                    <div className="font-semibold cursor-pointer flex items-center opacity-[0.90]">Men</div>
                    <div className="font-semibold cursor-pointer flex items-center opacity-[0.90]">Kids</div>
                    <div className="font-semibold cursor-pointer flex items-center opacity-[0.90]">Beauty</div>
                    <div className="font-semibold cursor-pointer flex items-center opacity-[0.90]">Home+Lifestyle</div>
                </div>
                <div className="h-[48px] border border-black gap-[60px] flex items-center justify-between px-[24px] cursor-pointer">
                    <input type="text" className="border-none outline-none focus:ring-0 text-base text-[#6B6B6B]" placeholder="Search for product"/>
                    <img src="/src/assets/images/search.svg"/>
                </div>
                <div className="h-[48px] bg-black text-[#E6E6E6] flex items-center justify-center gap-[12px] px-[12px] cursor-pointer"><img src="/src/assets/images/user.svg"/> Sign In/Sign Up</div>
                <div className="flex items-center gap-[16px]">
                    <img src="/src/assets/images/heart.svg" className="cursor-pointer"/>
                    <img src="/src/assets/images/wish.svg" className="cursor-pointer"/>
                </div>
            </div>
            <div className="border-b border-[#E6E6E6] h-[48px] w-full px-[60px] flex items-center justify-between">
                <div className="flex items-center gap-[30px] text-[14px]">
                    <div className="font-medium cursor-pointer hover:underline hover:decoration-2">New Arrivals</div>
                    <div className="font-medium cursor-pointer hover:underline hover:decoration-2">Shoes</div>
                    <div className="font-medium cursor-pointer hover:underline hover:decoration-2">Clothing</div>
                    <div className="font-medium cursor-pointer hover:underline hover:decoration-2">Accessories</div>
                    <div className="font-medium cursor-pointer hover:underline hover:decoration-2">Bags</div>
                    <div className="font-medium cursor-pointer hover:underline hover:decoration-2">Sports</div>
                    <div className="font-medium cursor-pointer hover:underline hover:decoration-2">Gifts</div>
                    <div className="font-medium cursor-pointer hover:underline hover:decoration-2">Brands</div>
                    <div className="font-semibold cursor-pointer text-[#D52B56]">SALE</div>
                </div>
                <div className="flex items-center gap-[8px]"><img src="/src/assets/images/headphone.svg"/> Need help? <span className="font-bold">+216 50 660006</span></div>
            </div>
        </div>
        <div className="w-full px-[60px] flex justify-center">
      <Swiper
        // spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full slider_home bg-black"
        speed={1800}
      >
        {/* Slide 1 */}
        <SwiperSlide className="bg-red-900">
          <div className="w-full flex justify-center bg-no-repeat bg-cover px-[80px] gap-[32px] flex-col text-white sliderone">
            <div className="flex flex-col justify-center gap-[12px]">
              <div className="text-white text-[40px] leading-[50px] header_slider">
                Fall in Love with Fashion <br /> This Valentine's Day!
              </div>
              <div className="text-[14px] max-w-[370px] text-[#E6E6E6]">
                Celebrate love in style! Shop our exclusive Valentine's Day collection and enjoy up to 50% off on romantic dresses, chic accessories, and more.
              </div>
            </div>
            <div className="bg-white h-[48px] w-fit px-[36px] text-black flex items-center justify-center tracking-[2%] text-[16px] font-medium cursor-pointer transition-transform duration-200 hover:scale-90">
              SHOP NOW
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="w-full flex justify-center bg-no-repeat bg-cover px-[80px] gap-[32px] flex-col text-white slidertwo">
            <div className="flex flex-col justify-center gap-[12px]">
              <div className="text-white text-[40px] leading-[50px] header_slider">
                Fresh Styles, Just for You!
              </div>
              <div className="text-[14px] max-w-[370px] text-[#E6E6E6]">
                Our new arrivals are here to elevate your wardrobe. Discover the latest trends and be the first to own the season's hottest looks!
              </div>
            </div>
            <div className="bg-black text-[#E6E6E6] h-[48px] w-fit px-[36px] flex items-center justify-center tracking-[2%] text-[16px] font-medium cursor-pointer transition-transform duration-200 hover:scale-90">
              SHOP NOW
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    </div>
  )
}

export default Home