import Layout from "./Layout";

const CheckoutSuccess = () => {
    return (
        <Layout headerGap="">
            <div className="w-full flex flex-col gap-[24px] p-[64px]">
                <div className="flex flex-col max-w-[500px] items-center w-full mx-auto gap-[24px]">
                    <img src="/images/checkout_success.svg"/>
                    <div className="font-medium text-[48px] text-[#141511] leading-[130%] text-center">Thanks Mahmud, your order was placed successfully</div>
                    <div className="text-[#676764] text-[20px] text-center leading-[130%] max-w-[450px]">We will send the latest information and updates about your order to <span className="text-[#912A1D] font-semibold">richarson@gmail.com</span> </div>
                </div>
            </div>
        </Layout>
    );
};

export default CheckoutSuccess;