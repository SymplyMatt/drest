import DeliveryForm from "../components/checkout/DeliveryForm";
import Summary from "../components/checkout/Summary";
import Layout from "./Layout";

const CheckoutDelivery = () => {
    return (
        <Layout headerGap="">
            <div className="w-full flex flex-col gap-[24px]">
                <div className="w-full grid grid-cols-3 min-h-[720px]">
                    <DeliveryForm />
                    <Summary />
                </div>
            </div>
        </Layout>
    );
};

export default CheckoutDelivery;