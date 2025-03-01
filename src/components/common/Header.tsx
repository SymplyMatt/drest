import TopHeaderSlide from "./TopHeaderSlide"

const Header = () => {
    return (
        <>
            <div className="w-full flex flex-col">
                <div className="w-full flex h-[42px] bg-headerBlack items-center justify-between text-textWhite px-[50px]">
                    <div className="flex items-center gap-[8px] cursor-pointer">
                        <img src="/images/france.svg" />
                        <div className="flex gap-[4px] items-center text-[14px]">
                            <span className="text-[14px] font-extrabold">FR</span>
                            <span className="text-[#E6E6E6] opacity-[0.7]">|</span>
                            <span>French</span>
                            <img src="/images/caretdownsm.svg" />
                        </div>

                    </div>
                    <div className="flex justify-center items-center gap-[40px] text-[14px]">
                        <div className="cursor-pointer"><img src="/images/arrowleft.svg" /></div>
                        <div className="font-semibold">We love love - Shop for all the Valentine's Day gifts in our LOVE SALE!!</div>
                        <div className="font-medium underline leading-[14px] cursor-pointer">SHOP NOW</div>
                        <div className="cursor-pointer"><img src="/images/arrowright.svg" /></div>
                    </div>
                    <div className="text-[14px] flex items-center gap-[4px] cursor-pointer">Currency: <span className="text-[14px] font-extrabold">EUR</span> <img src="/images/caretdownsm.svg" /></div>
                </div>
                <div className="w-full h-[92px] flex border-b border-[#E6E6E6] px-[50px] justify-between items-center">
                    <div className="cursor-pointer"><img src="/images/logo.svg" /></div>
                    <div className="flex items-center gap-[16px] uppercase">
                        <div className="font-semibold cursor-pointer flex items-center opacity-[0.90] hover:text-[#8F0024]">Women</div>
                        <div className="font-semibold cursor-pointer flex items-center opacity-[0.90] hover:text-[#8F0024]">Men</div>
                        <div className="font-semibold cursor-pointer flex items-center opacity-[0.90] hover:text-[#8F0024]">Kids</div>
                        <div className="font-semibold cursor-pointer flex items-center opacity-[0.90] hover:text-[#8F0024]">Beauty</div>
                        <div className="font-semibold cursor-pointer flex items-center opacity-[0.90] hover:text-[#8F0024]">Home+Lifestyle</div>
                    </div>
                    <div className="h-[48px] border border-black gap-[60px] flex items-center justify-between px-[24px] cursor-pointer">
                        <input type="text" className="border-none outline-none focus:ring-0 text-base text-[#6B6B6B]" placeholder="Search for product" />
                        <img src="/images/search.svg" />
                    </div>
                    <div className="flex items-center gap-[16px]">
                        <div className="h-[48px] bg-black text-[#E6E6E6] flex items-center justify-center gap-[12px] px-[12px] cursor-pointer"><img src="/images/user.svg" /> Sign In/Sign Up</div>
                        <img src="/images/heart.svg" className="cursor-pointer" />
                        <img src="/images/wish.svg" className="cursor-pointer" />
                    </div>
                </div>
                <div className="border-b border-[#E6E6E6] h-[48px] w-full px-[50px] flex items-center justify-between">
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
                    <div className="flex items-center gap-[8px]"><img src="/images/headphone.svg" /> Need help? <span className="font-bold">+216 50 660006</span></div>
                </div>
            </div>
            <div className="absolute z-10 bg-white w-full top-[182px] right-[0px] grid grid-cols-[auto_360px] px-[50px]">
                <div className="py-[30px] flex gap-[30px] flex flex-wrap">
                    <div className="flex flex-col gap-[10px]">
                        <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%] cursor-pointer">NEW & TRENDING</div>
                        <div className="flex flex-col gap-[10px] justify-center">
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Featured items</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">New Arrivals</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Trending</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Recommended</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%] cursor-pointer">BAGS</div>
                        <div className="flex flex-col gap-[10px] justify-center">
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">All Women's Bags</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Travel duffels</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Crossbody bags</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Messenger bags</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Tote bags</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Briefcases</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Backpacks</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%] cursor-pointer">CLOTHING</div>
                        <div className="flex flex-col gap-[10px] justify-center">
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">All Women's Clothing</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Hoodies & Sweat shirts</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Dresses</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Skirts</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Rompers</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Shorts</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Jump suits</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Tops</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%] cursor-pointer">FOOTWEAR</div>
                        <div className="flex flex-col gap-[10px] justify-center">
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">All Women’s Shoes</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Sneakers</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Dress shoes</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Sandals</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Loafers</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Running shoes</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">High-top sneakers</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Slip-ons</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%] cursor-pointer">ACCESSORIES</div>
                        <div className="flex flex-col gap-[10px] justify-center">
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">All Women’s accessories</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Scarves</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Hats</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Watches</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Neck Chains</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Gloves</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Earrings</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Ties</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%] cursor-pointer">SPORTS</div>
                        <div className="flex flex-col gap-[10px] justify-center">
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">All Sport items</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Tailored shirts</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Trending</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Refined pants</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Varsity jackets</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Outerwear jackets</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Casual tees</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Knit sweaters</div>
                            <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold">Luxury jeans</div>
                        </div>
                    </div>
                </div>
                <TopHeaderSlide />
            </div>
        </>
    )
}

export default Header