import { ReactNode, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Auth from "../components/common/Auth";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import Search from "../components/common/Search";
import MobileFooter from "../components/common/MobileFooter";
import AccountMobile from "../components/common/AccountMobile";
import { fetchFromApi, Product } from "../utils/utils";
import { setProducts } from "../redux/states/app";
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
                const products: Product[] = await fetchFromApi("products");
                dispatch(setProducts(products));
            } catch (error) {
                console.error("Error in useEffect:", error);
            }
        };
        products.length < 1 && fetchData();
    }, [dispatch]);

    if (products.length === 0) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <Loader />
            </div>
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