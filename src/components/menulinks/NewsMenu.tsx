import { useEffect, useState } from 'react';
import NewsSlide from './NewsSlide';
import { setSearchMode } from "../../redux/states/app";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

type MenuLinksProps = {
    hoveredMenu: string | null;
    setHoveredMenu: (menu: string | null) => void;
};

const NewsMenu: React.FC<MenuLinksProps> = ({ hoveredMenu, setHoveredMenu }) => {
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
      className={`absolute z-10 bg-white top-[182px] left-[50px] grid grid-cols-[auto_360px] gap-[30px] px-[50px] shadow-lg
                  transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`} 
      onMouseLeave={() => setHoveredMenu(null)}
    >
        <div className="py-[30px] pr-[70px] flex gap-[30px] flex-wrap border-r border-[#C4C4C4]">
            <div className="flex flex-col gap-[10px]">
                <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%]">NEW & POPULAR</div>
                <div className="flex flex-col gap-[10px] justify-center">
                    {["New arrivals", "Trending/Popular", "New Dresses", "New Bags", "New Accessories"].map((item) => (
                      <div key={item} className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200" onClick={() => handleMenuClick('NEW & POPULAR',item)}>
                        {item}
                      </div>
                    ))}
                </div>
            </div>
        </div>
        <NewsSlide />
    </div>
  )
}

export default NewsMenu