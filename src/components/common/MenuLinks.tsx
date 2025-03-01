import { useEffect, useState } from 'react';
import TopHeaderSlide from './TopHeaderSlide'

type MenuLinksProps = {
    hoveredMenu: string | null;
    setHoveredMenu: (menu: string | null) => void;
};

const MenuLinks: React.FC<MenuLinksProps> = ({ hoveredMenu, setHoveredMenu }) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        if (hoveredMenu) {
          setIsVisible(true);
        } else {
          setTimeout(() => setIsVisible(false), 100);
        }
    }, [hoveredMenu]);
  return (
    <div 
      className={`absolute z-10 bg-white w-full top-[182px] right-[0px] grid grid-cols-[auto_360px] px-[50px] shadow-lg
                  transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`} 
      onMouseLeave={() => setHoveredMenu(null)}
    >
        <div className="py-[30px] flex gap-[30px] flex-wrap">
            <div className="flex flex-col gap-[10px]">
                <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%]">NEW & TRENDING</div>
                <div className="flex flex-col gap-[10px] justify-center">
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Featured items</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">New Arrivals</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Trending</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Recommended</div>
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%]">BAGS</div>
                <div className="flex flex-col gap-[10px] justify-center">
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">All Women's Bags</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Travel duffels</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Crossbody bags</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Messenger bags</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Tote bags</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Briefcases</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Backpacks</div>
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%]">CLOTHING</div>
                <div className="flex flex-col gap-[10px] justify-center">
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">All Women's Clothing</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Hoodies & Sweat shirts</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Dresses</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Skirts</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Rompers</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Shorts</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Jump suits</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Tops</div>
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%]">FOOTWEAR</div>
                <div className="flex flex-col gap-[10px] justify-center">
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">All Women's Shoes</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Sneakers</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Dress shoes</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Sandals</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Loafers</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Running shoes</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">High-top sneakers</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Slip-ons</div>
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%]">ACCESSORIES</div>
                <div className="flex flex-col gap-[10px] justify-center">
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">All Women's accessories</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Scarves</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Hats</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Watches</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Neck Chains</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Gloves</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Earrings</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Ties</div>
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%]">SPORTS</div>
                <div className="flex flex-col gap-[10px] justify-center">
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">All Sport items</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Tailored shirts</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Trending</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Refined pants</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Varsity jackets</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Outerwear jackets</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Casual tees</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Knit sweaters</div>
                    <div className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200">Luxury jeans</div>
                </div>
            </div>
        </div>
        <TopHeaderSlide />
    </div>
  )
}

export default MenuLinks