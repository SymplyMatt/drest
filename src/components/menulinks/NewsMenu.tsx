import { useEffect, useState } from 'react';
import TopHeaderSlide from '../common/TopHeaderSlide'

type MenuLinksProps = {
    hoveredMenu: string | null;
    setHoveredMenu: (menu: string | null) => void;
};

const NewsMenu: React.FC<MenuLinksProps> = ({ hoveredMenu, setHoveredMenu }) => {
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
      className={`absolute z-10 bg-white top-[182px] left-[50px] grid grid-cols-[auto_360px] gap-[120px] px-[50px] shadow-lg
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
        </div>
        <TopHeaderSlide />
    </div>
  )
}

export default NewsMenu