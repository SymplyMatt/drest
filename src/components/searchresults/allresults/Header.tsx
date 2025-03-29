import { useSearchParams } from "react-router-dom";
import RoundCategoriesSlider from "../../home/RoundCategoriesSlider";

const Header = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search");
    const type = searchParams.get("type");
    return (
        <div className="w-full flex flex-col gap-[24px] justify-center px-[50px] pt-[20px]">
            <div className="w-full flex flex-col gap-[24px] justify-center">
                <div className="w-full flex items-center justify-between h-[48px]">
                    <div className="flex gap-[8px] items-end">
                        <div className="gap-[12px] text-[32px] font-semibold leading-[130%] tracking-[-4%] items-end">Search results for “{searchQuery}” <span className="text-[16px] font-normal">(Showing 2,001 Products)</span></div>
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
            {type === 'category' && <RoundCategoriesSlider />}
            <div className="w-full flex items-center justify-center gap-[18px]">
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
            </div>
        </div>
    );
}
export default Header;