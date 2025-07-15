import CartProducts from "../components/cart/CartProducts";
import EmptyCart from "../components/cart/EmptyCart";
import UpsellSlider from "../components/product/UpsellSlider";
import Layout from "./Layout";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Summary from "../components/checkout/Summary";

const Cart = () => {
    const { cart, products } = useSelector((state: RootState) => state.app);
    return (
        <Layout headerGap="">
            <div className="w-full flex flex-col gap-[24px]">
                <div className="w-full grid grid-cols-1 tmd:grid-cols-3 tmd:min-h-[720px]">
                    {cart.length !== 0 && <CartProducts />}
                    {cart.length === 0 && <EmptyCart />}
                    <Summary />
                </div>
                { products.length > 0 ? <UpsellSlider products={products}/> : <></> }
            </div>
        </Layout>
    );
};

export default Cart;