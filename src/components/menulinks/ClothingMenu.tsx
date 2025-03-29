import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchMode } from "../../redux/states/app";
import ShoesSlide from "./ShoesSlide";

type MenuLinksProps = {
    hoveredMenu: string | null;
    setHoveredMenu: (menu: string | null) => void;
};

const ClothingMenu: React.FC<MenuLinksProps> = ({ hoveredMenu, setHoveredMenu }) => {
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

    const handleMenuClick = (link: string) => {
        navigate(`/search/allresults?search=${encodeURIComponent(link)}&type=category`);
        dispatch(setSearchMode(null));
    };

    return (
        <div
            className={`absolute z-10 bg-white top-[182px] left-[200px] grid grid-cols-[auto_360px] gap-[100px] px-[50px] shadow-lg
                  transition-all duration-300 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
            onMouseLeave={() => setHoveredMenu(null)}
        >
            <div className="py-[30px] flex gap-[30px] flex-wrap">
                <div className="flex flex-col gap-[10px]">
                    <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%] uppercase">Clothing</div>
                    <div className="flex flex-col gap-[10px] justify-center">
                        {["All Women's Clothing", "Shirts & Tops", "Swimwear & Beachwear", "Skirts", "Shorts", "Sweat pants", "Rompers", "Dresses"].map((item) => (
                            <div
                                key={item}
                                className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200"
                                onClick={() => handleMenuClick(item)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%] uppercase">Shop by edit</div>
                    <div className="flex flex-col gap-[10px] justify-center">
                        {["Special Occasion", "Work edit", "Casual footwear"].map((item) => (
                            <div
                                key={item}
                                className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200"
                                onClick={() => handleMenuClick(item)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <div className="text-[#141511] font-bold text-[16px] leading-[24px] tracking-[0%] uppercase">Shop by brand</div>
                    <div className="flex flex-col gap-[10px] justify-center">
                        {["All Women Cloth Brands", "Birkenstock", "Adidas", "Nike"].map((item) => (
                            <div
                                key={item}
                                className="text-[#4F4F4D] text-[16px] font-normal leading-[24px] tracking-[0%] cursor-pointer hover:text-[#8F0024] hover:font-semibold transition-colors duration-200"
                                onClick={() => handleMenuClick(item)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ShoesSlide />
        </div>
    );
};

export default ClothingMenu;
