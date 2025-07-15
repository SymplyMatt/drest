import PaymentForm from "../components/checkout/PaymentForm";
import Summary from "../components/checkout/Summary";
import Layout from "./Layout";

const CheckoutPayment = () => {
    return (
        <Layout headerGap="">
            <div className="w-full flex flex-col gap-[24px]">
                <div className="w-full grid grid-cols-1 tmd:grid-cols-3 tmd:min-h-[720px]">
                    <PaymentForm />
                    <Summary />
                </div>
            </div>
        </Layout>
    );
};

export default CheckoutPayment;