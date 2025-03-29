import { useNavigate, useSearchParams } from "react-router-dom";
import RoundCategoriesSlider from "../../home/RoundCategoriesSlider";
import BrandsSlider from "./BrandsSlider";

const Header = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search");
    const type = searchParams.get("type");
    const navigate = useNavigate();
    const handleMenuClick = (category: string) => {
        navigate(`/search/allresults?search=${encodeURIComponent(category)}&type=subcategory`);
    };
    return (
        <div className="w-full flex flex-col gap-[24px] justify-center px-[50px] pt-[20px]">
            {type !== 'all' && <div className="flex items-center justify-center text-[18px]">Women's/Clothing</div>}
            <div className="w-full flex flex-col gap-[24px] justify-center">
                <div className="w-full flex items-center justify-between h-[48px]">
                    <div className="flex gap-[8px] items-end">
                        {type === 'all' && <div className="gap-[16px] text-[32px] font-semibold leading-[130%] tracking-[-4%] items-end">Search results for “{searchQuery}” <span className="text-[16px] font-normal capitalize">(Showing 2,001 Products)</span></div>}
                        {type !== 'all' && <div className="gap-[16px] text-[32px] font-semibold leading-[130%] tracking-[-4%] items-end uppercase">{searchQuery} <span className="text-[16px] font-normal capitalize">(Showing 2,001 Products)</span></div>}
                    </div>
                    <div className="flex items-center gap-[18px]">
                        <div className="flex items-center gap-[18px]">
                            <span>Sort:</span>
                            <select className="h-[48px] border border-black py-[8px] px-[12px] cursor-pointer outline-none min-w-[300px] text-[20px]">
                                <option value="a-z">NEWEST</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-[18px]">
                            <img src="/images/prev_arrivals.svg" className="cursor-pointer" />
                            <span>1/13</span>
                            <img src="/images/next_arrivals.svg" className="cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="h-[1px] bg-[#E6E6E6] w-full"></div>
            </div>
            {type === 'category' && <RoundCategoriesSlider handleClick={handleMenuClick}/>}
            {type === 'subcategory' && <BrandsSlider />}
            {type === 'all' &&<div className="w-full flex items-center justify-center gap-[18px]">
                <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                    <option value="Universe">Universe</option>
                </select>
                <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                    <option value="Universe">Category</option>
                </select>
                <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                    <option value="Universe">Size</option>
                </select>
                <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                    <option value="Universe">Color</option>
                </select>
                <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                    <option value="Universe">Brand</option>
                </select>
                <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                    <option value="Universe">Price</option>
                </select>
                <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                    <option value="Universe">Ratings</option>
                </select>
                <div className="cursor-pointer flex items-center justify-center gap-[8px] h-[40px] border border-[#959694] border-[0.7px] rounded-[38px] py-[8px] px-[16px] text-[#141511] font-semibold">
                    All Filters <img src="/images/filters.svg"/>
                </div>
            </div>}
            {type !== 'all' &&<div className="w-full flex items-center justify-center gap-[16px]">
                <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                    <option value="Universe">Category</option>
                </select>
                <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                    <option value="Universe">Category</option>
                </select>
                <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                    <option value="Universe">Size</option>
                </select>
                <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                    <option value="Universe">Length</option>
                </select>
                <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                    <option value="Universe">Brand</option>
                </select>
                <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                    <option value="Universe">Color</option>
                </select>
                <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                    <option value="Universe">Price</option>
                </select>
                <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                    <option value="Universe">Material</option>
                </select>
                <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                    <option value="Universe">Ratings</option>
                </select>
                <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                    <option value="Universe">Neck type</option>
                </select>
                <select className="cursor-pointer border border-[#959694] border-[0.7px] h-[40px] rounded-[38px] py-[8px] px-[16px] text-[#141511]">
                    <option value="Universe">Sleeve type</option>
                </select>
                <div className="cursor-pointer flex items-center justify-center gap-[8px] h-[40px] border border-[#959694] border-[0.7px] rounded-[38px] py-[8px] px-[16px] text-[#141511] font-semibold whitespace-nowrap">
                    All Filters <img src="/images/filters.svg"/>
                </div>
            </div>}
        </div>
    );
}
export default Header;