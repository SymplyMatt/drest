import { useEffect, useState } from 'react';
import TopHeaderSlide from '../common/TopHeaderSlide'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchMode } from "../../redux/states/app";
type MenuLinksProps = {
    hoveredMenu: string | null;
    setHoveredMenu: (menu: string | null) => void;
};

const FullMenu: React.FC<MenuLinksProps> = ({ hoveredMenu, setHoveredMenu }) => {
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
      className={`absolute z-10 bg-white w-full top-[182px] right-[0px] hidden tmd:grid grid-cols-[auto_360px] px-[50px] shadow-lg
                  transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`} 
      onMouseLeave={() => setHoveredMenu(null)}
    >
        <div className="py-[30px] flex gap-[30px] flex-wrap">
            <div className="flex flex-col gap-[10px]">
                <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%]">NEW & TRENDING</div>
                <div className="flex flex-col gap-[10px] justify-center">
                    {["Featured items", "New Arrivals", "Trending", "Recommended"].map((item) => (
                        <div key={item} className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200" onClick={() => handleMenuClick('NEW & TRENDING',item)}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%]">BAGS</div>
                <div className="flex flex-col gap-[10px] justify-center">
                    {["All Women's Bags", "Travel duffels", "Crossbody bags", "Messenger bags", "Tote bags", "Briefcases", "Backpacks"].map((item) => (
                        <div key={item} className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200" onClick={() => handleMenuClick('BAGS',item)}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%]">CLOTHING</div>
                <div className="flex flex-col gap-[10px] justify-center">
                    {["All Women's Clothing", "Hoodies & Sweat shirts", "Dresses", "Skirts", "Rompers", "Shorts", "Jump suits", "Tops"].map((item) => (
                        <div key={item} className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200" onClick={() => handleMenuClick('CLOTHING',item)}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%]">FOOTWEAR</div>
                <div className="flex flex-col gap-[10px] justify-center">
                    {["All Women's Shoes", "Sneakers", "Dress shoes", "Sandals", "Loafers", "Running shoes", "High-top sneakers", "Slip-ons"].map((item) => (
                        <div key={item} className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200" onClick={() => handleMenuClick('FOOTWEAR',item)}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%]">ACCESSORIES</div>
                <div className="flex flex-col gap-[10px] justify-center">
                    {["All Women's accessories", "Scarves", "Hats", "Watches", "Neck Chains", "Gloves", "Earrings", "Ties"].map((item) => (
                        <div key={item} className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200" onClick={() => handleMenuClick('ACCESSORIES',item)}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%]">SPORTS</div>
                <div className="flex flex-col gap-[10px] justify-center">
                    {["All Sport items", "Tailored shirts", "Trending", "Refined pants", "Varsity jackets", "Outerwear jackets", "Casual tees", "Knit sweaters", "Luxury jeans"].map((item) => (
                        <div key={item} className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200" onClick={() => handleMenuClick('SPORTS',item)}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <TopHeaderSlide />
    </div>
  )
}

export default FullMenu