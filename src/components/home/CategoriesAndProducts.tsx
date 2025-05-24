import { ReactNode, useState } from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import CategoriesAndProductsProduct from "./CategoriesAndProductsProduct";
import { ProductCategory } from "../../utils/utils";

interface CategoriesAndProductsProps {
    title?: string;
    showTitle?: boolean;
    titleComponent?: ReactNode;
}
const CategoriesAndProducts: React.FC<CategoriesAndProductsProps> = ({ title = 'Trending',  showTitle = true, titleComponent = <></> }) => {
    const { products, categories } = useSelector((state: RootState) => state.app);
    const [activeCategory, setActiveCategory] = useState<string | null>("All");
    const filteredProducts = activeCategory === "All" ? products : products.filter(product => product.categories.map(i=>i.name.toLowerCase()).includes(activeCategory?.toLowerCase() || ""));
    
    return (
    <div className="w-full flex flex-col items-center gap-[24px] mb-[50px]">
        { titleComponent }
        {showTitle && (
            <div className="w-full flex flex-col gap-[0px] tmd:gap-[20px] justify-center tmd:px-[50px]">
                <div className="w-full flex items-center justify-between h-[48px] my-[20px] tmd:my-[0px] px-[20px] tmd:px-[0px]">
                    <div className="flex items-center gap-[32px]">
                        <div className="text-[24px] font-semibold leading-[32.78px] tracking-[0%]">{title}</div>
                        <div className="items-center gap-[24px] hidden tmd:flex">
                            <img src="/images/line_sm.svg" alt="Divider" />
                            <div className={`h-[43px] flex items-center justify-center p-[12px] text-[14px] font-semibold leading-[19.12px] tracking-[0%] cursor-pointer ${activeCategory === "All" ? "bg-[#2B2B2B] text-white" : ""}`}  onClick={()=> setActiveCategory("All")}>All Categories</div>
                            {categories.slice(0,5).map((category:ProductCategory, index:number)=>(
                                <div className={`h-[43px] flex items-center justify-center p-[12px] text-[14px] font-semibold leading-[19.12px] tracking-[0%] cursor-pointer ${activeCategory === category.name ? "bg-[#2B2B2B] text-white" : ""}`} key={index} onClick={()=> setActiveCategory(category.name)}>{category.name}</div>
                            ))}
                        </div>
                    </div>
                    <div className="h-[48px] bg-white border border-black px-[36px] py-[12px] cursor-pointer flex items-center justify-center font-semibold leading-[24px] tracking-[0%] transition-transform duration-200 hover:scale-[0.9]">VIEW ALL</div>
                </div>
                <div className="h-[1px] bg-[#E6E6E6] w-full"></div>
            </div>
        )}
        
        <div className="w-full grid grid-cols-2 tmd:grid-cols-4">
            {filteredProducts.map((product, index) => ( <CategoriesAndProductsProduct key={index} product={product} /> ))}
        </div>
    </div>
    );
};

export default CategoriesAndProducts;