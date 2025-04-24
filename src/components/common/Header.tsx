import { useEffect, useState } from "react";
// import MenuLinks from "./MenuLinks";
import { useLocation, useNavigate } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { setSearchMode } from "../../redux/states/app";
import Languages from "./Languages";
import Currencies from "./Currencies";
import UserInfo from "./UserInfo";

const Header = () => {
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    console.log(hoveredMenu)
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);
    return (
        <>
            <div className="w-full flex flex-col">
                <div className="w-full flex h-[42px] bg-headerBlack items-center justify-between text-textWhite px-[20px] tmd:px-[50px]">
                    <Languages />
                    <div className="flex justify-center items-center gap-[40px] text-[14px]">
                        <div className="cursor-pointer hidden tmd:block "><img src="/images/arrowleft.svg" /></div>
                        <div className="hidden tmd:block font-semibold">We love love - Shop for all the Valentine's Day gifts in our LOVE SALE!!</div>
                        <div className="block tmd:hidden font-semibold">Special offers : 15% off for first purchase for new users</div>
                        <div className="hidden tmd:block font-medium underline leading-[14px] cursor-pointer">SHOP NOW</div>
                        <div className="hidden tmd:block cursor-pointer"><img src="/images/arrowright.svg" /></div>
                    </div>
                    <Currencies />
                </div>
                <div className="w-full h-[92px] flex border-b border-[#E6E6E6] px-[20px] tmd:px-[50px] justify-between items-center">
                    <div className="cursor-pointer" onClick={()=>navigate('/')}><img src="/images/logo.svg" className="h-[32px] tmd:h-[36px]"/></div>
                    <div className="items-center gap-[16px] uppercase hidden tmd:flex">
                        {["women", "men", "kids", "home", "beauty"].map((category, index) => (
                            <div key={index} className="font-semibold cursor-pointer flex items-center opacity-[0.90] hover:text-[#8F0024] open-menu">
                                <img src={`/images/${category}.svg`} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="h-[48px] border border-black flex items-center justify-between px-[12px] cursor-pointer w-[200px]">
                        <input type="text" className="border-none outline-none focus:ring-0 text-base text-[#6B6B6B] cursor-pointer" placeholder="Search for product" onClick={() => dispatch(setSearchMode('empty'))}/>
                        <img src="/images/search.svg" />
                    </div>
                    <UserInfo />
                </div>
                <div className="relative border-b border-[#E6E6E6] h-[48px] w-full px-[20px] tmd:px-[50px] hidden tmd:flex items-center justify-between">
                    <div className="flex items-center gap-[30px] text-[14px]">
                        {["New Arrivals", "Shoes", "Clothing", "Accessories", "Bags", "Sports", "Gifts", "Brands", "SALE"].map((category, index) => (
                            <div className={`group h-full ${category.toLowerCase() !== 'sale' ? 'font-medium cursor-pointer hover:decoration-2 ' : 'font-semibold cursor-pointer text-[#D52B56]'}`} key={index} onMouseEnter={() => setHoveredMenu(category)}>
                                {category}
                                <span className="h-[3px] bg-[#912A1D] absolute bottom-[-1px] hidden group-hover:block" style={{ width: `${category.length * 7}px` }}></span>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-[8px]"><img src="/images/headphone.svg" /> Need help? <span className="font-bold">+216 50 660006</span></div>
                </div>
                <div className="items-center gap-[16px] uppercase flex tmd:hidden w-full px-[20px] py-[10px]">
                        {["women", "men", "kids", "home", "beauty"].map((category, index) => (
                            <div key={index} className="font-semibold cursor-pointer flex items-center opacity-[0.90] hover:text-[#8F0024] open-menu">
                                <img src={`/images/${category}.svg`} alt="" />
                            </div>
                        ))}
                </div>
            </div>
            {/* <MenuLinks hoveredMenu={hoveredMenu} setHoveredMenu={setHoveredMenu}/> */}
        </>
    )
}

export default Header