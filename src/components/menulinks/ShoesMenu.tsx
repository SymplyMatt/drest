import { useEffect, useState } from 'react';
import ShoesSlide from './ShoesSlide';
import { setSearchMode } from "../../redux/states/app";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

type MenuLinksProps = {
    hoveredMenu: string | null;
    setHoveredMenu: (menu: string | null) => void;
};

const ShoesMenu: React.FC<MenuLinksProps> = ({ hoveredMenu, setHoveredMenu }) => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (hoveredMenu) {
          setIsVisible(true);
        } else {
          setTimeout(() => setIsVisible(false), 100);
        }
    }, [hoveredMenu]);
    const handleMenuClick = (subcategory:string,link: string) => {
        navigate(`/search/allresults?link=${encodeURIComponent(link)}&type=category&subcategory=${encodeURIComponent(subcategory)}&menu=${encodeURIComponent(hoveredMenu as string)}`);
        dispatch(setSearchMode(null));
    };
  return (
    <div 
      className={`absolute z-10 bg-white top-[182px] left-[100px] hidden tmd:grid grid-cols-[auto_360px] gap-[100px] px-[50px] shadow-lg
                  transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`} 
      onMouseLeave={() => setHoveredMenu(null)}
    >
        <div className="py-[30px] flex gap-[30px] flex-wrap">
            <div className="flex flex-col gap-[10px]">
                <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%]">NEW & TRENDING</div>
                <div className="flex flex-col gap-[10px] justify-center">
                    {["Featured items", "New Arrivals", "Trending", "Recommended"].map((item) => (
                        <div
                            key={item}
                            className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200"
                            onClick={() => handleMenuClick('NEW & TRENDING',item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%]">BAGS</div>
                <div className="flex flex-col gap-[10px] justify-center">
                    {["All Women's Bags", "Travel duffels", "Crossbody bags", "Messenger bags", "Tote bags", "Briefcases", "Backpacks"].map((item) => (
                        <div
                            key={item}
                            className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200"
                            onClick={() => handleMenuClick('BAGS',item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%]">CLOTHING</div>
                <div className="flex flex-col gap-[10px] justify-center">
                    {["All Women's Clothing", "Hoodies & Sweat shirts", "Dresses", "Skirts", "Rompers", "Shorts", "Jump suits", "Tops"].map((item) => (
                        <div
                            key={item}
                            className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200"
                            onClick={() => handleMenuClick('CLOTHING',item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <ShoesSlide />
    </div>
  )
}

export default ShoesMenu