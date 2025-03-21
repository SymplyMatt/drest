import { useEffect, useState } from "react";
import MenuLinks from "./MenuLinks";
import { useLocation, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { setAuthPage } from "../../redux/states/auth";
import { useSelector } from "react-redux";
import { setSearchMode } from "../../redux/states/app";

const Header = () => {
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch<AppDispatch>();
    const { loggedInUser } = useSelector((state: RootState) => state.app);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);
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
                    <div className="cursor-pointer" onClick={()=>navigate('/')}><img src="/images/logo.svg" /></div>
                    <div className="flex items-center gap-[16px] uppercase">
                        {["women", "men", "kids", "home", "beauty"].map((category, index) => (
                            <div key={index} className="font-semibold cursor-pointer flex items-center opacity-[0.90] hover:text-[#8F0024] open-menu" onMouseEnter={() => setHoveredMenu(category)}>
                                <img src={`/images/${category}.svg`} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="h-[48px] border border-black flex items-center justify-between px-[12px] cursor-pointer w-[200px]">
                        <input type="text" className="border-none outline-none focus:ring-0 text-base text-[#6B6B6B] cursor-pointer" placeholder="Search for product" onClick={() => dispatch(setSearchMode('empty'))}/>
                        <img src="/images/search.svg" />
                    </div>
                    <div className="flex items-center gap-[16px]">
                        {!loggedInUser && <div className="h-[48px] bg-black text-[#E6E6E6] flex items-center justify-center gap-[12px] px-[12px] cursor-pointer" onClick={() => dispatch(setAuthPage("emaillogin"))}><img src="/images/user.svg" /> Sign In/Sign Up</div>}
                        {loggedInUser && <div className="flex gap-[8px]">
                            <img src="/images/userimage.svg"/>
                            <div className="flex flex-col justify-between h-full">
                                <div className="text-[12px] font-medium">Hello John</div>
                                <div className="text-[14px] font-semibold">My Account</div>
                            </div>
                            <img src="/images/caretdownsmblack.svg" className="self-end cursor-pointer"/>
                        </div>}
                        <img src="/images/heart.svg" className="cursor-pointer" onClick={()=>navigate('/wishlist')}/>
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
            {/* <MenuLinks hoveredMenu={hoveredMenu} setHoveredMenu={setHoveredMenu}/> */}
        </>
    )
}

export default Header