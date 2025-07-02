import { ReactNode, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Auth from "../components/common/Auth";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import Search from "../components/common/Search";
import MobileFooter from "../components/common/MobileFooter";
import AccountMobile from "../components/common/AccountMobile";
import { ArrivalsAndCategory, fetchFromApi, Product, ProductCategory, Response } from "../utils/utils";
import { setCategories, setNewArrivals, setProducts, setSales, setTotalPages, setTotalProducts } from "../redux/states/app";
import Loader from "../components/common/Loader";
interface LayoutProps {
  children?: ReactNode;
  headerGap?: string;
}

const Layout = ({ children = <></>, headerGap = "tmd:gap-[24px]" }: LayoutProps) => {
    const dispatch = useDispatch();
    const { authPage } = useSelector((state: RootState) => state.auth);
    const { searchMode, showAccount, products } = useSelector((state: RootState) => state.app);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productRes: Response = (await fetchFromApi("products"));
                const products = productRes.data as Product[];
                const total = productRes.headers['x-wp-total'];
                const totalPages = productRes.headers['x-wp-totalpages'];
                if(total) dispatch(setTotalProducts(parseInt(total)));
                if(totalPages) dispatch(setTotalPages(parseInt(totalPages)));
                dispatch(setProducts(products));
                const sales: Product[] = (await fetchFromApi("products?on_sale=true")).data;
                dispatch(setSales(sales));
                const categories: ProductCategory[] = (await fetchFromApi("products/categories")).data;
                dispatch(setCategories(categories));
                const newArrivals: Product[] = (await fetchFromApi("products?orderby=date&order=desc&per_page=100")).data;
                const arrivalsAndCategories: ArrivalsAndCategory[] = categories.map((category:any)=>{
                    const productsInCategory = newArrivals.filter((newarrival:any)=> newarrival.categories.map((i:any)=>i.name).includes(category.name));
                    return { category: category, products: productsInCategory };
                });
                dispatch(setNewArrivals(arrivalsAndCategories));
            } catch (error) {
                console.error("Error in useEffect:", error);
            }
        };
        products.length < 1 && fetchData();
    }, [dispatch]);

    if (products?.length === 0 || !products) {
        return (
            <Loader />
        );
    }

    return (
        <>
            <div className={`w-full flex flex-col items-center ${(authPage || searchMode) ? "tmd:blur-sm" : ""}`}>
                <div className={`flex flex-col w-full items-center ${headerGap}`}>
                    <Header />
                    {children}
                </div>
                <Footer />
            </div>
            {authPage && <Auth />}
            {showAccount && <AccountMobile />}
            {searchMode && <Search />}
            <MobileFooter />
        </>
    );
};

export default Layout;