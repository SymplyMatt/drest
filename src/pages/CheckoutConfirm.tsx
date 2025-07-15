import CheckoutProducts from "../components/checkout/CheckoutProducts";
import Summary from "../components/checkout/Summary";
import Layout from "./Layout";

const CheckoutConfirm = () => {
    return (
        <Layout headerGap="">
            <div className="w-full flex flex-col gap-[24px]">
                <div className="w-full grid grid-cols-1 tmd:grid-cols-3 tmd:min-h-[720px]">
                    <CheckoutProducts />
                    <Summary />
                </div>
            </div>
        </Layout>
    );
};

export default CheckoutConfirm;