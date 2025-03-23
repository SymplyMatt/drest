import CartProducts from "../components/cart/CartProducts";
import EmptyCart from "../components/cart/EmptyCart";
import UpsellSlider from "../components/product/UpsellSlider";
import Layout from "./Layout";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Summary from "../components/checkout/Summary";

const Cart = () => {
    const { cart } = useSelector((state: RootState) => state.app);
    return (
        <Layout headerGap="">
            <div className="w-full flex flex-col gap-[24px]">
                <div className="w-full grid grid-cols-3 min-h-[720px]">
                    {cart.length !== 0 && <CartProducts />}
                    {cart.length === 0 && <EmptyCart />}
                    <Summary />
                </div>
                <UpsellSlider/>
            </div>
        </Layout>
    );
};

export default Cart;