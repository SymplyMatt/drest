import CategoriesAndProducts from "../components/home/CategoriesAndProducts";
import UpsellSlider from "../components/product/UpsellSlider";
import Layout from "./Layout";

const upsellTitleComponent = () => {
    return (
            <div className="w-full flex flex-col gap-[20px] justify-center px-[50px]">
                <div className="w-full flex items-center justify-between h-[48px]">
                    <div className="flex items-center gap-[32px]">
                        <div className="text-[24px] font-semibold leading-[32.78px] tracking-[0%]">Recommended</div>
                    </div>
                    <div className="h-[48px] bg-white border border-black px-[36px] py-[12px] cursor-pointer flex items-center justify-center font-semibold leading-[24px] tracking-[0%] transition-transform duration-200 hover:scale-[0.9]">VIEW ALL</div>
                </div>
                <div className="h-[1px] bg-[#E6E6E6] w-full"></div>
            </div>
    );
};

const wishlistTitleComponent = () => {
    return (
            <div className="w-full flex flex-col gap-[24px] justify-center px-[50px]">
                <div className="w-full flex items-center justify-between h-[48px]">
                    <div className="flex gap-[8px] items-end">
                        <div className="flex gap-[12px] text-[32px] font-semibold leading-[130%] tracking-[-4%] items-end">My Wishlist</div>
                        <div className="text-[14px] font-normal">4 products</div>
                    </div>
                    <div className="flex items-center gap-[18px]">
                        <div className="flex items-center gap-[18px]">
                            <span>Sort:</span>
                            <select className="h-[48px] border border-black py-[8px] px-[12px] cursor-pointer outline-none min-w-[300px] text-[20px]">
                                <option value="a-z">A-Z</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-[18px]">
                            <img src="/images/prev_arrivals.svg" className="cursor-pointer" />
                            <span>1/1</span>
                            <img src="/images/next_arrivals.svg" className="cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="h-[1px] bg-[#E6E6E6] w-full"></div>
            </div>
    );
};

const WishList = () => {
    return (
        <Layout>
            <div className="flex justify-start self-start px-[50px]">Home/Wishlist</div>
            <CategoriesAndProducts showTitle={false} titleComponent={wishlistTitleComponent()}/>
            <UpsellSlider showTitle={false} titleComponent={upsellTitleComponent()}/>
        </Layout>
    );
};

export default WishList;