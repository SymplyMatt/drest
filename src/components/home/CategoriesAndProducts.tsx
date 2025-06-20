import { ReactNode, useMemo, useState } from "react";
import CategoriesAndProductsProduct from "./CategoriesAndProductsProduct";
import { Product, ProductCategory } from "../../utils/utils";

interface CategoriesAndProductsProps {
    title?: string;
    showTitle?: boolean;
    titleComponent?: ReactNode;
    productsToDisplay: Product[];
}
const CategoriesAndProducts: React.FC<CategoriesAndProductsProps> = ({ title = 'Trending',  showTitle = true, titleComponent = <></>, productsToDisplay }) => {
    const [activeCategory, setActiveCategory] = useState<number | null>(0);
    const filteredProducts = (activeCategory === 0 || !showTitle) ? productsToDisplay : productsToDisplay.filter(product => {
        const categoryIds = product.categories.map(i => i.id);
        return categoryIds.includes(activeCategory as number)
    });
    const uniqueCategories = useMemo(() => {
        const categoryMap = new Map<number, ProductCategory>();
        productsToDisplay.forEach((product: Product) => {
          product.categories.forEach((category: ProductCategory) => {
            if (!categoryMap.has(category.id)) {
              categoryMap.set(category.id, category);
            }
          });
        });
        return Array.from(categoryMap.values());
    }, [productsToDisplay]);
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
                            <div className={`h-[43px] flex items-center justify-center p-[12px] text-[14px] font-semibold leading-[19.12px] tracking-[0%] cursor-pointer ${activeCategory === 0 ? "bg-[#2B2B2B] text-white" : ""}`}  onClick={()=> setActiveCategory(0)}>All</div>
                            {uniqueCategories.slice(0,5).map((category:ProductCategory, index:number)=>(
                                <div className={`h-[43px] flex items-center justify-center p-[12px] text-[14px] font-semibold leading-[19.12px] tracking-[0%] cursor-pointer ${activeCategory === category.id ? "bg-[#2B2B2B] text-white" : ""}`} key={index} onClick={()=> setActiveCategory(category.id)}>{category.name.replace(/&amp;/g, "&")}</div>
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