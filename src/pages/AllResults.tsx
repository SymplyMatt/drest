import CategoriesAndProducts from "../components/home/CategoriesAndProducts";
import Layout from "./Layout";


const titleComponent = () => {
    return (
            <div className="w-full flex flex-col gap-[24px] justify-center px-[50px] pt-[20px]">
                <div className="w-full flex flex-col gap-[24px] justify-center">
                    <div className="w-full flex items-center justify-between h-[48px]">
                        <div className="flex gap-[8px] items-end">
                            <div className="gap-[12px] text-[32px] font-semibold leading-[130%] tracking-[-4%] items-end">Search results for “Wo” <span className="text-[16px] font-normal">(Showing 2,001 Products)</span></div>
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
};
const pagination = () => {
    return (
        <div className="flex items-center gap-[18px] mt-[-36px]">
            <div className="opacity-50 cursor-not-allowed flex gap-[8px] items-center justify-center cursor-pointer border border-[#D6D6D5] py-[8px] px-[24px] h-[48px] text-[#141511] font-medium"><img src="/images/arrow_right.svg"/> PREVIOUS</div>
            <span>1/13</span>
            <div className="flex gap-[8px] items-center justify-center cursor-pointer border border-[#D6D6D5] py-[8px] px-[24px] h-[48px] text-[#141511] font-medium">NEXT <img src="/images/arrow_left.svg"/></div>
        </div>
    );
};

const AllResults = () => {
    return (
        <Layout>
            <CategoriesAndProducts showTitle={false} titleComponent={titleComponent()} products={Array.from({ length: 40 }, (_, i) => i + 1)}/>
            {pagination()}
        </Layout>
    );
};

export default AllResults;