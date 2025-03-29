import CategoriesAndProducts from "../components/home/CategoriesAndProducts";
import Layout from "./Layout";


const wishlistTitleComponent = () => {
    return (
            <div className="w-full flex flex-col gap-[24px] justify-center px-[50px] pt-[20px]">
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
    );
};
const pagination = () => {
    return (
        <div className="flex items-center gap-[18px] mt-[-20px]">
            <div className="opacity-50 cursor-not-allowed flex gap-[8px] items-center justify-center cursor-pointer border border-[#D6D6D5] py-[8px] px-[24px] h-[48px] text-[#141511] font-medium"><img src="/images/arrow_right.svg"/> PREVIOUS</div>
            <span>1/13</span>
            <div className="flex gap-[8px] items-center justify-center cursor-pointer border border-[#D6D6D5] py-[8px] px-[24px] h-[48px] text-[#141511] font-medium">NEXT <img src="/images/arrow_left.svg"/></div>
        </div>
    );
};

const AllResults = () => {
    return (
        <Layout>
            <CategoriesAndProducts showTitle={false} titleComponent={wishlistTitleComponent()} products={Array.from({ length: 40 }, (_, i) => i + 1)}/>
            {pagination()}
        </Layout>
    );
};

export default AllResults;