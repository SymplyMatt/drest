import { ReactNode, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Auth from "../components/common/Auth";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import Search from "../components/common/Search";
import MobileFooter from "../components/common/MobileFooter";
import AccountMobile from "../components/common/AccountMobile";
import { ArrivalsAndCategory, fetchFromApi, Product, ProductCategory, Response, SavedCartItem } from "../utils/utils";
import { setCategories, setHasLoadedCart, setLoggedInUser, setNewArrivals, setProducts, setSales, setTotalPages, setTotalProducts, updateCart, updateSavedCart } from "../redux/states/app";
import Loader from "../components/common/Loader";
interface LayoutProps {
  children?: ReactNode;
  headerGap?: string;
}

const Layout = ({ children = <></>, headerGap = "tmd:gap-[24px]" }: LayoutProps) => {
    const dispatch = useDispatch();
    const { authPage } = useSelector((state: RootState) => state.auth);
    const { searchMode, showAccount, products, loggedInUser, cart, savedcart, hasLoadedCart, categories } = useSelector((state: RootState) => state.app);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productRes: Response = (await fetchFromApi("products?per_page=8"));
                const products = productRes.data as Product[];
                const total = productRes.headers['x-wp-total'];
                const totalPages = productRes.headers['x-wp-totalpages'];
                if(total) dispatch(setTotalProducts(parseInt(total)));
                if(totalPages) dispatch(setTotalPages(parseInt(totalPages)));
                dispatch(setProducts(products));
                const sales: Product[] = (await fetchFromApi("products?on_sale=true")).data;
                dispatch(setSales(sales));
            } catch (error) {
                console.error("Error in useEffect:", error);
            }
        };
        products.length < 1 && fetchData();
    }, []);

    useEffect(()=>{
        if (loggedInUser) return
        const savedUser = JSON.parse(localStorage.getItem("user") as string);
        if (!savedUser) return;
        const { name, email, token, displayName } = savedUser;
        dispatch(setLoggedInUser({name, email, token, displayName}));
    },[]);

    useEffect(() => {
        async function fetchArrivalsAndCategories() {
            const validArrivalsAndCategories: ArrivalsAndCategory[] = [];
            const productRes = await fetchFromApi("products?orderby=date&order=desc&per_page=100");
            const newArrivals: Product[] = productRes.data;
            const categoryIdSet = new Set<number>();
                newArrivals.forEach(product => {
                product.categories.forEach(cat => categoryIdSet.add(cat.id));
            });
            const categoryIds = Array.from(categoryIdSet);
            const includeParam = categoryIds.join(',');
            const categoryRes = await fetchFromApi(`products/categories?include=${includeParam}`);
            const categories: ProductCategory[] = categoryRes.data;
            categories.forEach(category => {
                const productsInCategory = newArrivals.filter(product =>
                    product.categories.some(cat => cat.id === category.id)
                );
                if (productsInCategory.length > 0) {
                    validArrivalsAndCategories.push({ category, products: productsInCategory });
                }
            });
            dispatch(setCategories(validArrivalsAndCategories.map(item => item.category)));
            dispatch(setNewArrivals(validArrivalsAndCategories));
        }
        products?.length && !categories.length && fetchArrivalsAndCategories();
    }, [products?.length]);  

    useEffect(() => {
        async function fetchSavedCart() {
            const uniqueProducts = Array.from(new Set(savedcart.map((i: SavedCartItem) => i.product_id)));
            const includeParam = uniqueProducts.join(',');
            const productsRes = await fetchFromApi(`products?include=${includeParam}`);
            if (!productsRes.data) return;
            const cartProductsAndQuantities = productsRes.data.map((item: Product) => {
                const cart_item = savedcart.find(i => i.product_id === item.id);
                return { product: item, quantity: cart_item ? cart_item.quantity : 1, key: cart_item ? cart_item.key : null
                };
            });
            const cartWithKeys = [];
            for (const entry of cart) {
                const savedCartEntry = savedcart.find(i => i.product_id === entry.product.id);
                if (savedCartEntry) {
                    cartWithKeys.push({ ...entry, key: savedCartEntry.key });
                    if (savedCartEntry.quantity !== entry.quantity) await fetchFromApi("custom/v1/cart/add", {method: "POST",body: { key: savedCartEntry.key, quantity: entry.quantity },baseurl: 'https://newshop.tn/wp-json/', useToken: true});
                } else {
                    const response = await fetchFromApi("custom/v1/cart/add", { method: "POST", body: { product_id: entry.product.id, quantity: entry.quantity || 1 }, baseurl: 'https://newshop.tn/wp-json/', useToken: true,});
                    if (!response.data || !response.data.cart) continue;
                    const cartKey = Object.keys(response.data.cart)[0];
                    cartWithKeys.push({ ...entry, key: cartKey });
                }
            }
            const combinedMap = new Map<number, typeof cart[0]>();
            for (const entry of cartWithKeys) {
                combinedMap.set(entry.product.id, entry);
            }
            for (const entry of cartProductsAndQuantities) {
                if (!combinedMap.has(entry.product.id)) {
                    combinedMap.set(entry.product.id, entry);
                }
            }
            const combinedCart = Array.from(combinedMap.values());
            dispatch(updateCart(combinedCart));
            dispatch(setHasLoadedCart(true));
        }
        (savedcart.length > 0 && !hasLoadedCart) && fetchSavedCart();
    }, [savedcart]);

    useEffect(() => {
        async function fetchSavedCart() {
            const response = await fetchFromApi("custom/v1/cart/view", {method: "GET", baseurl:'https://newshop.tn/wp-json/', useToken: true});
            if(!response.data || !response.data.cart_items) return
            dispatch(updateSavedCart(response.data.cart_items));
        }
        loggedInUser && savedcart.length === 0 && fetchSavedCart();
    }, [loggedInUser]);

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
            <div className="flex flex-col absolute top-[100px] right-[10px] tmd:right-[30px] notification-container gap-20"></div>
        </>
    );
};

export default Layout;