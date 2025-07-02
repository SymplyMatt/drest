import { ReactNode, useEffect, useMemo, useState } from "react";
import CategoriesAndProductsProduct from "./CategoriesAndProductsProduct";
import { fetchFromApi, Product, ProductCategory, Response } from "../../utils/utils";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface CategoriesAndProductsProps {
    title?: string;
    showTitle?: boolean;
    titleComponent?: ReactNode;
    productsToDisplay: Product[];
}
const CategoriesAndProducts: React.FC<CategoriesAndProductsProps> = ({ title = 'Trending',  showTitle = true, titleComponent = <></>, productsToDisplay }) => {
    const { totalPages } = useSelector((state: RootState) => state.app);
    const [pages, setPages] = useState<number>(totalPages);
    const [activeCategory, setActiveCategory] = useState<number | null>(0);
    const [activeCategoryProducts, setActiveCategoryProducts] = useState<Product[]>([]);
    const [activeCategoryPages, setActiveCategoryPages] = useState<number>(1);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const filteredProducts = (activeCategory === 0 || !showTitle) ? productsToDisplay : activeCategoryProducts;
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
    useEffect(()=>{
        const fetchData = async () => {
            try {
                setCurrentPage(1);
                const products: Response = (await fetchFromApi(`products?category=${activeCategory}&page=${currentPage}&per_page=8`));
                const totalPages = products.headers['x-wp-totalpages'];
                if(totalPages) setActiveCategoryPages(parseInt(totalPages));
                setActiveCategoryProducts(products.data as Product[]);
            } catch (error) {
                console.error("Error in useEffect:", error);
            }
        };
        activeCategory && setActiveCategoryProducts([]);
        activeCategory && fetchData();
        if(!activeCategory) setActiveCategoryProducts([]);
    },[activeCategory]);

    useEffect(()=>{
        const fetchData = async () => {
            setActiveCategoryProducts([]);
            try {
                const products: Response = (await fetchFromApi(`products?category=${activeCategory}&page=${currentPage}&per_page=8`));
                setActiveCategoryProducts(products.data as Product[]);
            } catch (error) {
                console.error("Error in useEffect:", error);
            }
        };
        currentPage && activeCategory && fetchData();
    },[currentPage]);
    useEffect(()=>{
        setPages(totalPages);
    },[totalPages]);
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
        <div className="flex items-center justify-center gap-[50px]">
            <div className={`flex items-center justify-center gap-[4px] ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`} onClick={()=>currentPage>1 && setCurrentPage(currentPage-1)}>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.99994 11.6537L0.346191 6L5.99994 0.346249L7.05369 1.4L2.45369 6L7.05369 10.6L5.99994 11.6537Z" fill="#2B2B2B"/>
                </svg>
                Prev
            </div>
            <div className="flex w-full items-center justify-center gap-[20px]">
                {Array.from({ length: activeCategory ? activeCategoryPages : pages }).reduce((acc: React.ReactNode[], _, index) => {
                    const page = index + 1;
                    const pageToUse = activeCategory ? activeCategoryPages : pages;
                    const isInFirstFive = page <= 5;
                    const isInLastTwo = page > pageToUse - 2;
                    const isNearCurrent = page >= currentPage - 1 && page <= currentPage + 1;
                    const shouldShow = isInFirstFive || isInLastTwo || isNearCurrent;
                    const lastKey = acc.length ? (acc[acc.length - 1] as any)?.key : null;
                    const lastPage = typeof lastKey === "string" && lastKey.startsWith("ellipsis") ? Number(lastKey.split("-")[1]) : Number(lastKey);
                    if (shouldShow) {
                    if (acc.length && lastPage && page - lastPage > 1) {
                        acc.push(<div key={`ellipsis-${page}`}>...</div>);
                    }
                    acc.push(
                        <div key={page} className={`h-[32px] border border-[#2B2B2B] flex items-center justify-center cursor-pointer p-[4px] rounded-[4px] ${currentPage === page ? "bg-[#2B2B2B] text-white" : "opacity-50"} ${page < 10 ? "w-[32px]" : "w-[50px]"}`}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </div>
                    );
                    }
                    return acc;
                }, [])}
            </div>
            <div className={`flex items-center justify-center gap-[4px] ${((!activeCategory && currentPage === pages) || (activeCategory && currentPage === activeCategoryPages)) && 'opacity-50 cursor-not-allowed'}`} onClick={()=>setCurrentPage(currentPage+1)}>
                Next
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.94625 6L0.346252 1.4L1.4 0.346249L7.05375 6L1.4 11.6537L0.346252 10.6L4.94625 6Z" fill="#2B2B2B"/>
                </svg>
            </div>
        </div>
    </div>
    );
};

export default CategoriesAndProducts;